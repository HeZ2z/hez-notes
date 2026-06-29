---
title: "Java语言-2025fa-yy重点"
author: "HeZzz"
pubDatetime: 2025-11-04T13:53:24.000+08:00
slug: "java语言-2025fa-yy重点"
tags:
  - "Java"
  - "语法"
description: "Java 语言及网络编程 2025 秋季学期的重点整理。"
---

> Java 语言及网络编程 2025 秋季学期 的重点，来源于[计算机速通之家 | QQ 群号：468081841](https://qm.qq.com/q/ojSHMvHG5a)。
>
> 本文连载于[Java语言-2025fa-yy重点 - HeZzz](https://hez2z.github.io/2025/11/04/Java%E8%AF%AD%E8%A8%80-2025fa-yy%E9%87%8D%E7%82%B9/).
>
> 基于yy ver.扩展而来

🙇‍♂️🙇‍♂️🙇‍♂️时间仓促，有不足之处烦请及时告知。[邮箱hez2z@foxmail.com](mailto:hez2z@foxmail.com) 或者在 [速通之家](https://qm.qq.com/q/ojSHMvHG5a) 群里 `@9¾`.

## 题型分布

| 题型           | 题数 | 每题分值 |    小计 | 备注               |
| -------------- | ---: | -------: | ------: | ------------------ |
| 简答题         |    6 |        5 |      30 | —                  |
| 程序分析及填空 |    4 |       10 |      40 | 容易得分也容易失分 |
| 综合编程题     |    2 |  20 / 10 |      30 | 一题20分，一题10分 |
| **总计**       |    — |        — | **100** | —                  |

## 考试范围

> 只考前十章，内容均有涉及，网络编程、数据库不考。
>
> 以下链接中大部分为英文资料，可以安装[沉浸式翻译的浏览器插件](https://immersivetranslate.com/zh-Hans/)，方便阅读。

### 运算符，Lambda 表达式

> [Java Operators - GeeksforGeeks](https://www.geeksforgeeks.org/java/operators-in-java/)
>
> [Java Lambda Expressions - GeeksforGeeks](https://www.geeksforgeeks.org/java/lambda-expressions-java-8/)
>
> [Java Operators - W3Schools](https://www.w3schools.com/java/java_operators.asp)
>
> [Java Lambda Expressions - W3Schools](https://www.w3schools.com/java/java_lambda.asp)

涉及到一定的 “运算符” 内容，还有 Lambda 表达式。

### 数组

一维数组、二维数组（声明、创建、初始化、遍历）。

> [数组 - Hello Algorithm](https://www.hello-algo.com/chapter_array_and_linkedlist/array/)
>
> [Java Arrays - GeeksforGeeks](https://www.geeksforgeeks.org/java/arrays-in-java/)
>
> [Java Arrays - W3Schools](https://www.w3schools.com/java/java_arrays.asp)
>
> [数组相关题目 - LeetCode](https://leetcode.cn/problem-list/array)

- 声明：

```Java
数据类型[] 数组名;          // 一维数组
数据类型[][] 数组名;        // 二维数组
```

- 创建：

```Java
数组名 = new 数据类型[长度];          // 一维数组
数组名 = new 数据类型[行数][列数];    // 二维数组
```

- 初始化：

```Java
数组名[索引] = 值;          // 一维数组
数组名[行索引][列索引] = 值;    // 二维数组
```

- 遍历：

```Java
// 一维数组遍历
for (int i = 0; i < 数组名.length; i++) {
    System.out.println(数组名[i]);
}

// 二维数组遍历
for (int i = 0; i < 数组名.length; i++) {
    for (int j = 0; j < 数组名[i].length; j++) {
        System.out.println(数组名[i][j]);
    }
}
```

### 数组排序（冒泡排序）

> [冒泡排序 - Hello Algorithm](https://www.hello-algo.com/chapter_sorting/bubble_sort/?h=%E5%86%92%E6%B3%A2)
>
> [Java Program for Bubble Sort - GeeksforGeeks](https://www.geeksforgeeks.org/dsa/java-program-for-bubble-sort/)

```Java
/* 冒泡排序 */
void bubbleSort(int[] nums) {
    // 外循环：未排序区间为 [0, i]
    for (int i = nums.length - 1; i > 0; i--) {
        // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
        for (int j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                // 交换 nums[j] 与 nums[j + 1]
                int tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
}
```

### 杨辉三角(Pascal's Triangle) - 二维数组应用

> [Pascal's Triangle - GeeksforGeeks](https://www.geeksforgeeks.org/dsa/pascal-triangle/)
>
> [118. 杨辉三角 - LeetCode](https://leetcode.cn/problems/pascals-triangle)
>
> [119. 杨辉三角 II - LeetCode](https://leetcode.cn/problems/pascals-triangle-ii)

### 面向对象编程 - OOP

> [Java OOP Concepts - GeeksforGeeks](https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/)
>
> [Java OOP - W3Schools](https://www.w3schools.com/java/java_oop.asp)

- 面向对象的概念、3个基本特征。
- 类的概念。
- 对象和类的关系（重要）
- 封装性的含义
- 继承性的含义
- 多态性里面“重写”和“重载”的区别（重要）（去年考了）
- 然后提了一嘴封装性的目的（进行模块化）和继承性的目的（重用父类代码），也许不重要

### 类的定义

> [Java Classes - GeeksforGeeks](https://www.geeksforgeeks.org/java/classes-objects-java/)
>
> [Java Classes - W3Schools](https://www.w3schools.com/java/java_classes.asp)

1. 类的定义（代码格式），修饰符和成员修饰符可能考简答题（去年考了个final）

2. 一些常用类：Math类（数学计算）、String类、System类（in、out应用）要了解

3. 匿名内部类和实例内部类（单例模式）

### 异常处理

> [Java Exceptions - GeeksforGeeks](https://www.geeksforgeeks.org/java/exceptions-in-java/)
>
> [Java Exceptions_Try...Catch - W3Schools](https://www.w3schools.com/java/java_try_catch.asp)

try...catch...finally语句

```Java
try {
    // 可能产生异常的代码
} catch (异常类型1 变量名1) {
    // 处理异常类型1的代码
} catch (异常类型2 变量名2) {
    // 处理异常类型2的代码
} finally {
    // 无论是否发生异常，都会执行的代码
}
```

### 图形界面(Java Swing)

图形用户界面一定会考一个编程题（熟悉 label、文本框、按钮），可能会使用到Jbutton、Jframe、JTextfield、JLabel类。

> [Java ActionListener - GeeksforGeeks](https://www.geeksforgeeks.org/advance-java/java-actionlistener-in-awt/)

事件监听器 （很重要！大概率会考） ，提了 ActionListener 接口里面的 actionPerformed 方法。

#### Jbutton

```Java
JButton button = new JButton("Click Me");
button.setBounds(50, 100, 95, 30);
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button Clicked");
    }
});

Frame frame = new JFrame("My Frame");
frame.add(button);
frame.setSize(400, 400);
frame.setLayout(null);
frame.setVisible(true);
```

#### Jframe

```Java
JFrame frame = new JFrame("My Frame");
frame.setSize(400, 400);
frame.setVisible(true);
```

#### JTextfield

```Java
JTextField textField = new JTextField();
textField.setBounds(50, 50, 150, 20);

frame.add(textField);

textField.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        String input = textField.getText();
        System.out.println("Input: " + input);
    }
});
```

#### JLabel

```Java
JLabel label = new JLabel("Hello, World!");
label.setBounds(50, 20, 100, 30);
```

> 什么清朝老东西

### 集合框架

> [Collections in Java - GeeksforGeeks](https://www.geeksforgeeks.org/java/collections-class-in-java/)
>
> [Java Collections - W3Schools](https://www.w3schools.com/java/java_collections.asp)
>
> [数组和链表 - Hello Algorithm](https://www.hello-algo.com/chapter_array_and_linkedlist/)

集合+泛型一起考察，其中要熟悉集合的创建、集合元素的添加和遍历。

### 多线程

> [Multithreading in Java - GeeksforGeeks](https://www.geeksforgeeks.org/java/multithreading-in-java/)
>
> [Java Threads - W3Schools](https://www.w3schools.com/java/java_threads.asp)

多线程里的 3 种实现方法，线程间的协调同步、互斥。

- 继承 Thread 类
- 实现 Runnable 接口
- 实现 Callable 接口

#### 继承 Thread 类

```Java
class CookingTask extends Thread {
    private String task;

    CookingTask(String task) {
        this.task = task;
    }

    public void run() {
        System.out.println(task + " is being prepared by " +
            Thread.currentThread().getName());
    }
}

public class Restaurant {
    public static void main(String[] args) {
        Thread t1 = new CookingTask("Pasta");
        Thread t2 = new CookingTask("Salad");
        Thread t3 = new CookingTask("Dessert");
        Thread t4 = new CookingTask("Rice");

        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}
```

#### 实现 Runnable 接口

```Java
class CookingJob implements Runnable {
    private String task;

    CookingJob(String task) {
        this.task = task;
    }

    public void run() {
        System.out.println(task + " is being prepared by " +
            Thread.currentThread().getName());
    }
}

public class RestaurantRunnable {
    public static void main(String[] args) {
        Thread t1 = new Thread(new CookingJob("Soup"));
        Thread t2 = new Thread(new CookingJob("Pizza"));
        Thread t3 = new Thread(new CookingJob("Burger"));

        t1.start();
        t2.start();
        t3.start();
    }
}
```

#### 实现 Callable 接口

```Java
class CookingCallable implements Callable<String> {
    private String task;

    CookingCallable(String task) {
        this.task = task;
    }

    public String call() throws Exception {
        return task + " is being prepared by " +
            Thread.currentThread().getName();
    }
}

public class RestaurantCallable {
    public static void main(String[] args) throws Exception {
        // 方法1：使用FutureTask
        FutureTask<String> futureTask1 = new FutureTask<>(new CookingCallable("Steak")); [[1]]
        FutureTask<String> futureTask2 = new FutureTask<>(new CookingCallable("Fish"));

        Thread t1 = new Thread(futureTask1);
        Thread t2 = new Thread(futureTask2);

        t1.start();
        t2.start();

        // 获取结果
        System.out.println(futureTask1.get());
        System.out.println(futureTask2.get());

        // 方法2：使用ExecutorService（更常用）
        ExecutorService executor = Executors.newFixedThreadPool(2); [[1]]
        Future<String> future1 = executor.submit(new CookingCallable("Chicken"));
        Future<String> future2 = executor.submit(new CookingCallable("Vegetables"));

        System.out.println(future1.get());
        System.out.println(future2.get());

        executor.shutdown();
    }
}
```

> Java 25 中完善了虚拟线程（Virtual Threads），但考试范围内不涉及该内容。若有兴趣，可自行了解相关资料。

### IO流

> [Java 8 Stream - GeeksforGeeks](https://www.geeksforgeeks.org/java/java-8-stream-tutorial/)
>
> [Java IO Streams - W3Schools](https://www.w3schools.com/java/java_io_streams.asp)

IO流：过滤流、对象的串行化
