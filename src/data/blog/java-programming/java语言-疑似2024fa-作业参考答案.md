---
title: "Java语言-疑似2024fa-作业参考答案"
author: "HeZzz"
pubDatetime: 2025-11-06T14:14:18.000+08:00
slug: "java语言-疑似2024fa-作业参考答案"
tags:
  - "Java"
  - "语法"
description: "Java 语言及网络编程疑似 2024 秋季学期作业及参考答案整理。"
---

> Java 语言及网络编程疑似 2024 年秋季学期的作业及其参考答案，来源于[计算机速通之家 | QQ 群号：468081841](https://qm.qq.com/q/ojSHMvHG5a)。
>
> 本文连载于[Java语言-2025fa-yy重点 - HeZzz](https://hez2z.github.io/2025/11/04/Java%E8%AF%AD%E8%A8%80-2025fa-yy%E9%87%8D%E7%82%B9/).
>
> 基于杨勇ver.扩展而来

🙇‍♂️🙇‍♂️🙇‍♂️时间仓促，有不足之处烦请及时告知。[邮箱hez2z@foxmail.com](mailto:hez2z@foxmail.com) 或者在 [速通之家](https://qm.qq.com/q/ojSHMvHG5a) 群里 `@9¾`。

## 面向过程（2,3章）

### 阶乘累加计算器

> Q: 利用 `Scanner` 输入正整数 n, 计算多项式 1！+2！+3！… + n!，如果多项式之和超过 2000 时需中止后续项的相加操作，并输出累加之和以及停止时累加项（a!）的a值。
>
> 输出格式参考：System.out.printf("the sum is %d, and the last item is %d",sum,i)

```Java
import java.util.Scanner;

public class Chapter32 {
    public static void main(String arg[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int i = 1;
        int sum = 0;
        int factorial = 1; // 用于累积阶乘值
        int lastItem = 0;  // 记录最后一项的索引

        while (i <= n) {
            factorial *= i; // 计算 i!
            sum += factorial;
            lastItem = i;   // 更新最后一项为当前 i

            // 检查是否超过 2000（严格大于）
            if (sum > 2000) {
                break;
            }

            i++; // 准备下一项
        }

        System.out.printf("the sum  is %d, and the last item is %d", sum, lastItem);
        sc.close();
    }
}
```

### 辗转相除法

> 通过Scanner输入两个正整数，利用辗转相除法（欧几里得算法）求两个正整数的最大公约数

```Java
import java.util.Scanner;

public class Chapter33 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();

        // 校验正整数输入
        if (num1 <= 0 || num2 <= 0) {
            System.out.println("Error: Input must be positive integers.");
            scanner.close();
            return;
        }

        int gcd = gcdIterative(num1, num2);
        System.out.printf("The GCD is %d%n", gcd);

        scanner.close();
    }

    /**
     * 迭代版欧几里得算法
     *
     * @param a 第一个正整数
     * @param b 第二个正整数
     * @return 两个正整数的最大公约数
     */
    public static int gcdIterative(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
```

> 关于辗转相除: [辗转相除法 | 维基百科](https://zh.wikipedia.org/zh-cn/%E8%BC%BE%E8%BD%89%E7%9B%B8%E9%99%A4%E6%B3%95)

### 字符判断

> 从键盘输入一个字符，用程序来判断这个字符是属于数字，西文字母还是其他字符。
>
> **用例1：** 输入 `s` 输出 `s是西文字符`
>
> **用例2：** 输入 `4` 输出 `4是数字`
>
> **用例3：** 输入 `中` 输出 `中是其他字符`
>
> **用例4：** 输入 `！` 输出 `！是其他字符`

```Java
import java.util.Scanner;

public class Chapter36 {
    public static void main(String arg[]) {
        Scanner scanner = new Scanner(System.in);
        char c = scanner.next().charAt(0);

        // 使用字符常量判断
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
            System.out.println(c + "是西文字符");
        } else if (c >= '0' && c <= '9') {
            System.out.println(c + "是数字");
        } else {
            System.out.println(c + "是其他字符");
        }

        scanner.close();
    }
}
```

### 异或位运算找奇数次

> 建立数组 `arr`，并通过标准输入端输入 n 个数据，而且只有一个数出现奇数次，其他的都出现偶数次，请用异或运算找出这个奇数次出现的数（注意，输入数组长度 n ,和数组数据中间要加一个换行）
>
> **用例1** 输入: `5` `2 3 6 3 2` 输出: `奇数次出现的数为：6`
>
> **用例2** 输入: `7` `3 3 3 3 4 4 5` 输出: `奇数次出现的数为：5`

```Java
import java.util.Scanner;

public class Chapter38 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. 严格分两行读取：第一行n，第二行数组
        int n = scanner.nextInt();
        scanner.nextLine(); // 关键：消耗换行符

        int result = 0;
        int count = 0;

        // 2. 只读取n个有效整数
        while (count < n && scanner.hasNextInt()) {
            int num = scanner.nextInt();
            result ^= num;
            count++;
        }

        // 3. 验证是否读取足够数据
        if (count < n) {
            System.out.println("Error: Insufficient input numbers");
            return;
        }

        System.out.println("奇数次出现的数为：" + result);
        scanner.close();
    }
}
```

## 面向对象程序设计（4,5章）

> [Java 语言 -2025fa-yy 重点 #面向对象编程 - OOP | HeZzz](https://hez2z.github.io/2025/11/04/Java%E8%AF%AD%E8%A8%80-2025fa-yy%E9%87%8D%E7%82%B9/#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B-OOP)

### instanceof 运算符

> (填空题) 第五章课后 第二题 5.2 2: 读程序，写结果

```Java
class sup{}

public class sub extends sup{

public static void main(String arg[]){
    sub sb1=new sub();
    sup sp1=new sub();
    sup sp2=new sup();

    System.out.println("sp1 instanceof sub: "+(sp1 instanceof sub));
    System.out.println("sp2 instanceof sub: "+(sp2 instanceof sub));}
}
```

答案：

```Text
sp1 instanceof sub: true
sp2 instanceof sub: false
```

### 多态

> (填空题)第五章课后第3题

```Java
//该类不符合设计原则，但可以用来考察多态
class A {
    public String Show(D obj) {
        return ("A and D"); }
    public String Show(A obj) {
        return ("A and A"); }
}
class B extends A {
    public String Show(B obj) {
            return ("B and B"); }
    public String Show(A obj) {
            return ("B and A"); }
}
class C extends B {
    public String Show(C obj) {
            return ("C and C"); }
    public String Show(B obj) {
            return ("C and B"); }
}
class D extends B {
    public String Show(D obj) {
            return ("D and D"); }
    public String Show(B obj) {
            return ("D and B"); }
}
 public class mainTest {
         public static void main(String args[]){
                A a1 = new A();
                A a2 = new B();
                B b = new B();
                C c = new C();
                D d = new D();

                System.out.println(a1.Show(b));
                System.out.println(a1.Show(c));
                System.out.println(a1.Show(d));
                System.out.println(a2.Show(b));
                System.out.println(a2.Show(c));
                System.out.println(a2.Show(d));
                System.out.println(b.Show(b));
                System.out.println(b.Show(c));
                System.out.println(b.Show(d));
            }
    }
```

答案：

```Text
A and A
A and A
A and D
B and A
B and A
A and D
B and B
B and B
A and D
```

> 纯史

### 继承链中的方法选择

> 课后第4题 读程序，写结果

```Java
class Father {
    public void Show(Father obj) {
        System.out.println("in Father.show-Father");
    }
}

class Son extends Father {
    public void Show(Son obj) {
        System.out.println("in Son.show-Son");
    }

    public void Show(Father obj) {
        System.out.println("in Son.show-Father");
    }

    public void Show(GrandSon obj) {
        System.out.println("in Son.show-GrandSon");
    }

}

class GrandSon extends Son { }

public class mainTest1 {
    public static void main(String args[]) {
        Father f2 = new Son();
        GrandSon gs1 = new GrandSon();
        f2.Show(gs1); // 引用类型确定函数，然后动态绑定该函数
    }
}
```

答案：

```Text
in Son.show-Father
```

### 方法重写

第五章课后第5题 读程序，写结果

**代码内容**：

```Java
class superc {
    int i = 5;

    void show() {
        System.out.println("the i is :" + i);
    }
}

public class subc extends superc {
    int i = 6;

    public static void main(String[] arg) {
        subc s = new subc();

        System.out.println(s.i); // 子类的 i
        s.show(); // 调用父类定义的 show 方法
    }
}
```

答案：

```Text
6
the i is :5
```

### 还是方法重写

第五章课后第6题

```Java
class Base {
    private String name = "base";

    public Base() {
        tellName(); // 调用可能被子类重写的方法
    }

    public void tellName() {
        System.out.println("Base tell name: " + name);
    }
}

public class Dervied extends Base {
    private String name = "dervied";

    public Dervied() {
        tellName();
    }

    public void tellName() {
        System.out.println("Dervied tell name: " + name);
    }

    public static void main(String[] args) {
        new Dervied();
    }
}
```

答案：

```Text
Dervied tell name: null
Dervied tell name: dervied
```

### Student 类综合应用

> 3、编写程序，声明一个 `Student` 类，属性包括：学号、姓名、职务，英语成绩、数学成绩、计算机成绩，这些属性对外不可见。
>
> 方法包括构造方法， `compare` 方法（比较两个学生的总成绩，也可以比较两人的单科成绩，`compare` 方法需要传入待比较的学生，和待比较的类型，比如是某个具体的单科，或者是总成绩）。
>
> 1. 在主方法中定义一个 `Student` 数组，生成对象存入其中。
> 2. 找出总成绩最高的学生，再找出数学成绩最低的学生
>
> 和这个可能很像:[Java 语言 - 2023fa - 回忆版 #编程题 2：学生管理系统 | HeZzz](https://hez2z.github.io/2025/11/05/Java%E8%AF%AD%E8%A8%80-2023fa-%E5%9B%9E%E5%BF%86%E7%89%88/#%E7%BC%96%E7%A8%8B%E9%A2%98-2%EF%BC%9A%E5%AD%A6%E7%94%9F%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F)

```Java
class Student {
    private String id;       // 学号
    private String name;     // 姓名
    private String position; // 职务
    private int english;     // 英语成绩
    private int math;        // 数学成绩
    private int computer;    // 计算机成绩

    // 构造方法
    public Student(String id, String name, String position, int english, int math, int computer) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.english = english;
        this.math = math;
        this.computer = computer;
    }

    // 比较方法：比较当前学生与另一个学生在指定类型的成绩
    // type参数: "total"=总成绩, "english"=英语, "math"=数学, "computer"=计算机
    public int compare(Student other, String type) {
        switch (type) {
            case "total":
                return (this.english + this.math + this.computer)
                     - (other.english + other.math + other.computer);
            case "english":
                return this.english - other.english;
            case "math":
                return this.math - other.math;
            case "computer":
                return this.computer - other.computer;
            default:
                throw new IllegalArgumentException("Invalid comparison type: " + type);
        }
    }

    public String getName() {
        return name;
    }
}

public class StudentManager {
    public static void main(String[] args) {

        // 1. 定义Student数组并生成对象
        Student[] students = new Student[5];
        students[0] = new Student("S001", "张三", "班长", 88, 92, 95);
        students[1] = new Student("S002", "李四", "学习委员", 95, 85, 90);
        students[2] = new Student("S003", "王五", "无", 82, 90, 88);
        students[3] = new Student("S004", "赵六", "文体委员", 90, 88, 92);
        students[4] = new Student("S005", "钱七", "无", 85, 80, 93);

        // 2. 找出总成绩最高的学生
        Student highestTotal = students[0];
        for (int i = 1; i < students.length; i++) {

            // 使用compare方法比较总成绩
            if (highestTotal.compare(students[i], "total") < 0) {
                highestTotal = students[i];
            }
        }

        // 3. 找出数学成绩最低的学生
        Student lowestMath = students[0];
        for (int i = 1; i < students.length; i++) {
            // 使用compare方法比较数学成绩
            if (lowestMath.compare(students[i], "math") > 0) {
                lowestMath = students[i];
            }
        }

        // 输出结果
        System.out.println("总成绩最高的学生: " + highestTotal.getName());
        System.out.println("数学成绩最低的学生: " + lowestMath.getName());

    }
}
```

## I/O 流，多线程等(6,10章)

### 文件复制

> 利用字节输入流、字节字符转换流、缓冲区流实现纯文本文件内容的复制
>
> [Java 语言 - 2023fa - 回忆版 #IO 缺语句填空 | HeZzz](http://hez2z.github.io/2025/11/05/Java%E8%AF%AD%E8%A8%80-2023fa-%E5%9B%9E%E5%BF%86%E7%89%88/#IO-%E7%BC%BA%E8%AF%AD%E5%8F%A5%E5%A1%AB%E7%A9%BA%EF%BC%88%E9%87%8D%E7%82%B9%E5%86%85%E5%AE%B9%EF%BC%89)

```Java
import java.io.*;
import java.nio.charset.Charset;
public class UseFileIO {
    public static void main(String[] args) throws IOException {
        long size = 0;
        Charset cs = Charset.forName("UTF-8");
        try (FileReader fr = new FileReader("西游记.txt", cs);
                FileReader fr = new FileReader("西游记_备份.txt")) {

                    char[] buf = new char[1024];
                    int len = 0;

                    // 一次读写一个数组大小的数据
                    while ((len = fr.read(buf)) != -1) {
                        fw.write(buf, 0, len);
                        size += len;
                    }
                    System.out.println("复制完成，字节数：" + size);
                } catch(FileNotFoundException e) {
                    System.out.println("文件未找到！");
                } catch(IOException e) {
                    System.out.println("复制过程中出现 I/O 错误！");
                }
    }
}
```

### (其它) 多线程编程

> （第九章 ，习题4.1）编写一个多线程程序，演示两个人同时操作一个银行账户，一个人存钱，一个人取钱。
>
> 互斥对象不需要自己定义，直接调用Java已经提供的同步数据结构作为两类线程的共享数据
>
> [Java 语言 - 2023fa - 回忆版 #多线程银行取款 | HeZzz](https://hez2z.github.io/2025/11/05/Java%E8%AF%AD%E8%A8%80-2023fa-%E5%9B%9E%E5%BF%86%E7%89%88/#%E7%BC%96%E7%A8%8B%E9%A2%98-1%EF%BC%9A%E5%A4%9A%E7%BA%BF%E7%A8%8B%E9%93%B6%E8%A1%8C%E5%8F%96%E6%AC%BE)

### (其它) 一元二次方程类 GUI

> 设计一个一元二次方程类，通过输入三个参数初始化方程对象，并提供方程求解方法要考虑用户的非法输入，并给出相应的异常处理

### (其它) 网络TCP协议客户端服务器通信

> 利用TCP协议实现一对一的 C/S 模式客户端服务器编程。客户端通过标准输入端循环输入数据，服务器获取数据后，显式在本地屏幕上，同时，回传 ok 给客户端
>
> 25年不考网络编程，略
