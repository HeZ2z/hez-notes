---
title: "云计算技术-25fa-zb最后一课-MapReduce"
author: "HeZzz"
pubDatetime: 2025-11-29T17:00:37.000+08:00
slug: "云计算技术-25fa-zb最后一课-mapreduce"
tags:
  - "云计算技术"
description: "云计算技术 2025 秋季学期最后一课中 MapReduce 部分的内容整理。"
---

云计算技术最后一课的 MapReduce 部分内容整理。

## 题目

Section 2.3.1: Matrix-Vector Multiplication by MapReduce

2.3.1节：通过 MapReduce 进行矩阵-向量乘法

Suppose we have an $n \times n$ matrix $M$, whose element in row $i$ and column $j$ will be denoted $m_{ij}$. Suppose we also have a vector $v$ of length $n$, whose $j$th element is $v_j$. Then the matrix-vector product is the vector $x$ of length $n$, whose $i$th element $x_i$ is given by $x_i = \sum_{j=1}^{n} m_{ij} \cdot v_j$.

假设我们有一个 $n \times n$ 矩阵 $M$，其第 $i$ 行第 $j$ 列的元素表示为 $m_{ij}$。假设我们还有一个长度为 $n$ 的向量 $v$，其第 $j$ 个元素为 $v_j$。那么矩阵-向量乘积是长度为 $n$ 的向量 $x$，其第 $i$ 个元素 $x_i$ 由 $x_i = \sum_{j=1}^{n} m_{ij} \cdot v_j$ 给出。

- **The Map Function**
  - for each matrix element $m_{ij}$, produce the key-value pair $(i, m_{ij} \cdot v_j)$
  - 对每个矩阵元素 $m_{ij}$，生成键值对 $(i, m_{ij} \cdot v_j)$

- **The Reduce Function**
  - sum all the values associated with a given key $i$, and the result is a pair $(i, x_i)$
  - 对与给定键 $i$ 关联的所有值求和，结果是一个对 $(i, x_i)$

Question: Using the matrix-vector multiplication described in Section 2.3.1, applied to the matrix and vector:

使用 2.3.1 节中描述的矩阵-向量乘法，应用于矩阵和向量：

$$
\begin{bmatrix}
1 & 2 & 3 & 4 \\\\
5 & 6 & 7 & 8 \\\\
9 & 10 & 11 & 12 \\\\
13 & 14 & 15 & 16
\end{bmatrix}
$$

$$
\begin{bmatrix}
1 \\\\
2 \\\\
3 \\\\
4
\end{bmatrix}
$$

Apply the Map function to this matrix and vector. Then, identify all the key-value pairs that are output of Map.

应用此矩阵和向量的 Map 函数。然后，识别所有 Map 输出的键值对。

Solution:

Each $m_{ij}$ is multiplied by $v_j$, and this product forms the value of a key-value pair that has key $i$, the row number.

每个 $m_{ij}$ 乘以 $v_j$，该乘积形成一个键值对的值，该键值对的键为 $i$，即行号。

Thus, in row-major order, the sixteen key-value pairs produced are:

这样，按行优先顺序，产生的十六个键值对是：

$$
\begin{bmatrix}
(1,1) & (1,4) & (1,9) & (1,16) \\\\
(2,5) & (2,12) & (2,21) & (2,32) \\\\
(3,9) & (3,20) & (3,33) & (3,48) \\\\
(4,13) & (4,28) & (4,45) & (4,64)
\end{bmatrix}
$$

Reduce will sum the values corresponding to the same key, thus, results of reduce are:

$(1,30), (2,70), (3,110), (4,150).$

Reduce 函数将对相同键对应的值进行求和，因此，reduce 的结果是：

$(1,30)，(2,70)，(3,110)，(4,150)。$

---

Consider a simple example:

举一个简单的例子：

- We have a large dataset where input keys are strings and input values are integers.
  我们有一个大型数据集，其中输入键是字符串，输入值是整数。
- We wish to compute the mean of all integers associated with the same key (rounded to the nearest integer).
  我们希望计算与同一键关联的所有整数的平均值(四舍五入到最接近的整数)。
- A real-world example might be a large user log from a popular website, where keys represent user ids and values represent some measure of activity such as elapsed time for a particular session.
  一个现实的例子可能是来自一个流行网站的大型用户日志，其中键表示用户 ID，值表示某种活动的度量，例如特定会话的经过时间。
- A program Tommy has implemented the problem on MapReduce. He has written a few versions with the pseudo code shown in Figures 1—4.
  Tommy 实现了 MapReduce 上的问题。他编写了几个版本，伪代码如图 1-4 所示。

## Solution 1

a) Initially, Tommy has finished an implementation with Version 1 (Figure 1). He finds that the implementation can have correct results, but the performance is very slow. Why?

最开始，Tommy 完成了版本 1 的实现。他发现该实现可以得到正确的结果，但性能非常慢。为什么？

```Python
class MAPPER
  method MAP(string t, integer r)
    EMIT(string t, integer r)

class REDUCER
  method REDUCE(string t, integers [r_1, r_2, ...])
    sum ← 0
    cnt ← 0
    for all integer r ∈ integers [r_1, r_2, ...] do
        sum ← sum + r
        cnt ← cnt + 1
    r_avg ← sum/cnt
    EMIT(string t, integer r_avg)
```

Figure 1. Computing the Mean: Version 1

It requires shuffling all key-value pairs from mappers to reducers across the network, which is highly inefficient.

它需要通过网络将所有键值对从 mappers 传输到 reducers，这效率非常低下。

## Solution 2

b) Tommy wants to improve the performance using combiner. He comes out the second implementation (Version 2 in Figure 2). He finds that he can seldom get the reasonable results. Why?

Tommy 想使用 combiner 来提高性能。他提出了第二个实现。他发现很少能得到合理的结果。为什么？

```Python
class MAPPER
  method MAP(string t, integer r)
    EMIT(string t, integer r)

class COMBINER
  method COMBINE(string t, integers [r_1, r_2, ...])
    sum ← 0
    cnt ← 0
    for all integer r ∈ integers [r_1, r_2, ...] do
        sum ← sum + r
        cnt ← cnt + 1
    EMIT(string t, pair (sum, cnt)) // Separate sum and count

class REDUCER
  method REDUCE(string t, pairs [(s_1, c_1), (s_2, c_2) ...])
    sum ← 0
    cnt ← 0
    for all pair (s, c) ∈ pairs [(s_1, c_1), (s_2, c_2) ...] do
        sum ← sum + s
        cnt ← cnt + c
    r_avg ← sum/cnt
    EMIT(string t, integer r_avg)
```

Figure 2. Computing the Mean: Version 2

- Combiner must have the same input and output key-value type
  Combiner 必须具有相同的输入和输出键值类型
- Combiners are optimizations that cannot change the correctness of the algorithm.
  Combiners 是优化，不能改变算法的正确性。
- If Combiner removed, the output value type of the mapper is integer, so the reducer expects to receive a list of integers as values. **But the reducer actually expects a list of pairs!**
  如果移除 Combiner，mapper 的输出值类型是整数，因此 reducer 期望接收一个整数列表作为值。**但实际上 reducer 期望的是一对对的列表！**
- The correctness of the algorithm is contingent on the combiner running on the output of the mappers, and more specifically, that the combiner is run exactly once.
  算法的正确性取决于 combiner 在 mappers 输出上运行，更具体地说，combiner 必须恰好运行一次。

## Solution 3

c) After careful design, Tommy finally develops an efficient and correct implementation (Version 3 in Figure 3). Analyze the correctness of the combiner and efficiency of the algorithm (i.e., why it is more efficient than Version 1).

在经过小心谨慎的设计后，Tommy 最终开发出了一个高效且正确的实现。分析 combiner 的正确性和算法的效率(即，为什么它比版本 1 更高效)。

```Python
class MAPPER
  method MAP(string t, integer r)
    EMIT(string t, pair (r, 1))

class COMBINER
  method COMBINE(string t, pairs [(s₁, c₁), (s₂, c₂) ...])
    sum ← 0
    cnt ← 0
    for all pair (s, c) ∈ pairs [(s₁, c₁), (s₂, c₂) ...] do
        sum ← sum + s
        cnt ← cnt + c
    EMIT(string t, pair (sum, cnt))

class REDUCER
  method REDUCE(string t, pairs [(s₁, c₁), (s₂, c₂) ...])
    sum ← 0
    cnt ← 0
    for all pair (s, c) ∈ pairs [(s₁, c₁), (s₂, c₂) ...] do
        sum ← sum + s
        cnt ← cnt + c
    r_avg ← sum/cnt
    EMIT(string t, pair (r_avg, cnt))
```

Figure 3. Computing the Mean: Version 3

- In the mapper we emit as the value a pair consisting of the integer and one—this corresponds to a partial count over one instance.
  在 Mapper 中，我们发出一个由整数和一组成的对作为值——这对应于一个实例的部分计数。
- The combiner separately aggregates the partial sums and the partial counts (as before), and emits pairs with updated sums and counts.
  Combiner 分别聚合部分和与部分计数(如前所述)，并发出具有更新和计数的对。
- The reducer is similar to the combiner, except that the mean is computed at the end.
  Reducer 类似于 combiner，只是最后计算平均值。
- In essence, this algorithm transforms a non-associative operation (mean of numbers) into an associative operation (element-wise sum of a pair of numbers, with an additional division at the very end).
  本质上，该算法将非结合操作(数字的平均值)转换为结合操作(数字对的逐元素求和，最后进行额外的除法)。

## Solution 4

d) Tommy analyzes the efficiency of Version 3, and comes out an even more efficient implementation (Version 4 in Figure 4). Why does Version 4 is even more efficient than Version 3?

Tommy 分析了版本 3 的效率，并提出了一个更高效的实现。为什么版本 4 比版本 3 更高效？

```Python
class MAPPER
  method INITIALIZE
    S ← new ASSOCIATIVEARRAY
    C ← new ASSOCIATIVEARRAY
  method MAP(string t, integer r)
    S{t} ← S{t} + r
    C{t} ← C{t} + 1
  method CLOSE
    for all term t ∈ S do
      EMIT(term t, pair (S{t}, C{t}))
```

Figure 4. Computing the Mean: Version 4

- Inside the mapper, the partial sums and counts associated with each string are held in memory across input key-value pairs.
  在 mapper 中，与每个字符串关联的部分和与计数在输入键值对之间保存在内存中。
- Intermediate key-value pairs are emitted only after the entire input split has been processed; similar to before, the value is a pair consisting of the sum and count.
  仅在处理完整个输入拆分后才发出中间键值对；与之前类似，值是由和与计数组成的一对。

## Summary

- Mapper and Reducer is the key operation of divide and conquer.
  Mapper 和 Reducer 是分而治之的关键操作。
- Combiner is an optimization step to reduce the amount of data transmission
  Combiner 是减少数据传输量的优化步骤。
- Leverage the design of Mapreduce program. (How to partition the data)
  利用 Mapreduce 程序的设计。(如何划分数据)

> PS: 内容与 zb 的 PPT 内容一致，仅作整理记录之用。
>
> 中文部分由 ChatGPT 翻译，仅供参考，如有错误，欢迎指正。
>
> 伪代码部分用 Python 语法高亮，仅作展示之用。

![MapReduce](/pic/25cloud/MapReduce.png)
