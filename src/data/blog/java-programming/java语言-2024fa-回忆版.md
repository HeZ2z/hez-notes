---
title: "Java语言-2024fa-回忆版"
author: "HeZzz"
pubDatetime: 2025-11-05T16:54:40.000+08:00
slug: "java语言-2024fa-回忆版"
tags:
  - "Java"
  - "语法"
description: "Java 语言及网络编程 2024 秋季学期的回忆版真题整理。"
---

> Java 语言及网络编程 2024 秋季学期 的回忆版真题，来源于[计算机速通之家 | QQ 群号：468081841](https://qm.qq.com/q/ojSHMvHG5a)。
>
> 本文连载于[Java语言-2024fa-回忆版 | HeZzz](https://hez2z.github.io/2025/11/06/Java%E8%AF%AD%E8%A8%80-2024fa-%E5%9B%9E%E5%BF%86%E7%89%88).

🙇‍♂️🙇‍♂️🙇‍♂️时间仓促，有不足之处烦请及时告知。[邮箱hez2z@foxmail.com](mailto:hez2z@foxmail.com) 或者在 [速通之家](https://qm.qq.com/q/ojSHMvHG5a) 群里 `@9¾`。

## 一、简答题（4 道 40 分）

### 面向对象的三个基本特点，解释

三个基本特点：封装、继承、多态。

- 封装：将数据和操作数据的方法绑定在一起，隐藏内部实现细节，只暴露必要的接口，提高代码的安全性和可维护性。
- 继承：子类可以继承父类的属性和方法，促进代码的重用和扩展。
- 多态：同一操作作用于不同的对象，可以表现出不同的行为，提高代码的灵活性和可扩展性。

### final 修饰类,方法,变量（不是成员方法吗）分别表示什么

- final 修饰类：表示该类不能被继承。
- final 修饰方法：表示该方法不能被重写。
- final 修饰变量：表示该变量的值不能被修改，一旦赋值后不可更改。

### 线程实现的三个方法，代码举例

实现线程的三种方法：

1. 继承 Thread 类并重写 run() 方法。

   ```Java
   class MyThread extends Thread {
       @Override
       public void run() {
           System.out.println("线程运行中");
       }
   }
   ```

2. 实现 Runnable 接口并实现 run() 方法。

   ```Java
   class MyRunnable implements Runnable {
       @Override
       public void run() {
           System.out.println("线程运行中");
       }
   }
   ```

3. 实现 Callable 接口。

   ```Java
   import java.util.concurrent.Callable;

   class MyCallable implements Callable<Integer> {
       @Override
       public Integer call() throws Exception {
           System.out.println("线程运行中");
           return 42;
       }
   }
   ```

### 方法重载和重写的区别

> [Overloading vs Overriding in Java | GeeksforGeeks](https://www.geeksforgeeks.org/java/difference-between-method-overloading-and-method-overriding-in-java/)

#### 定义

- **方法重载（Overloading）**：在同一个类中定义多个同名方法，但参数列表不同（参数个数、类型或顺序不同）。
- **方法重写（Overriding）**：子类重新定义父类中已有的方法，方法名、参数列表和返回类型必须相同（或协变）。

#### 核心区别

| 特征         | 方法重载                 | 方法重写                               |
| ------------ | ------------------------ | -------------------------------------- |
| **多态类型** | 编译时多态（静态多态）   | 运行时多态（动态多态）                 |
| **发生位置** | 同一个类内或不同类间     | 仅在具有继承关系的父子类之间           |
| **参数列表** | 必须不同                 | 必须完全相同                           |
| **返回类型** | 可以不同                 | 必须相同或协变（子类型）               |
| **继承要求** | 不需要继承               | 必须存在继承关系                       |
| **绑定机制** | 静态绑定（编译时确定）   | 动态绑定（运行时根据对象实际类型确定） |
| **限制条件** | 可重载private和final方法 | 不能重写private、final和static方法     |

#### 代码示例

```Java
// 方法重载示例
class MathUtil {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; } // 重载
}

// 方法重写示例
class Animal {
    void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); } // 重写
}
```

#### 本质区别

- **方法重载**：在编译阶段由编译器根据方法调用时的参数类型和数量决定调用哪个方法。
- **方法重写**：在运行时由JVM根据对象的实际类型（而非引用类型）决定调用哪个方法，实现多态性。
  这两种机制都是Java多态的重要体现，重载提高了代码的灵活性和可读性，重写则支持了面向对象的继承和多态特性。

### 抽象类，接口区别

> [Difference Between Abstract Class and Interface in Java | GeeksforGeeks](https://www.geeksforgeeks.org/java/difference-between-abstract-class-and-interface-in-java/)

#### 一、基本定义

**抽象类**是Java中一种不能被直接实例化的特殊类，它既可以包含抽象方法（没有具体实现的方法），也可以包含具体方法（有完整实现的方法）。抽象类通常作为其他类的基类，提供部分实现和共享代码，体现了"is-a"的关系。它可以拥有构造器、成员变量、静态代码块等完整的类特性，主要用于代码复用和建立类层次结构。

**接口**是Java中一种完全抽象的引用类型，它定义了一组方法签名（行为规范），要求实现该接口的类必须提供这些方法的具体实现。接口中的所有方法默认都是抽象的（Java 8之前），从Java 8开始支持default和static方法，Java 9进一步支持private方法。接口中的变量默认都是public static final（常量）。接口体现了"can-do"的关系，主要用于定义行为契约和实现多重继承。

#### 二、关键区别对比表

| **对比维度**   | **抽象类**                                                         | **接口**                                                                             |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| **实例化**     | 不能直接实例化，但可以有构造器                                     | 完全不能实例化，无构造器                                                             |
| **方法类型**   | 可包含抽象方法、具体方法、构造方法                                 | Java 8前：仅抽象方法；Java 8+：可包含default、static方法；Java 9+：可包含private方法 |
| **继承/实现**  | 一个类只能继承一个抽象类（单继承）                                 | 一个类可实现多个接口（多重继承）                                                     |
| **变量特性**   | 可包含final、non-final、static、non-static变量，可维护对象状态     | 所有变量默认为public static final（常量），不能有实例变量                            |
| **访问修饰符** | 方法和变量可使用任意访问修饰符（public/protected/private/default） | 方法和变量默认为public，不能使用protected/private修饰符                              |
| **设计理念**   | 侧重于代码复用，体现"is-a"关系                                     | 侧重于行为契约，体现"can-do"关系                                                     |
| **适用场景**   | 相关类共享通用代码和状态；需要构造器初始化                         | 完全抽象；需要多重继承；定义跨类族的行为规范                                         |

#### 三、代码示例

**抽象类示例：**

```Java
// 抽象类Shape，作为其他形状类的基类
abstract class Shape {
    String objectName = " "; // 成员变量

    // 构造器
    Shape(String name) {
        this.objectName = name;
    }

    // 具体方法（有实现）
    public void moveTo(int x, int y) {
        System.out.println(this.objectName + " has been moved to x = " + x + " and y = " + y);
    }

    // 抽象方法（无实现）
    abstract public double area();
    abstract public void draw();
}

// 具体子类继承抽象类
class Rectangle extends Shape {
    int length, width;

    Rectangle(int length, int width, String name) {
        super(name); // 调用父类构造器
        this.length = length;
        this.width = width;
    }

    @Override
    public void draw() {
        System.out.println("Rectangle has been drawn");
    }

    @Override
    public double area() {
        return (double)(length * width);
    }
}
```

**接口示例：**

```Java
// 接口定义行为规范
interface Drawable {
    void draw(); // 抽象方法
}

interface Movable {
    void moveTo(int x, int y); // 抽象方法

    // Java 8+ default方法
    default void defaultMove() {
        System.out.println("Default move implementation");
    }
}

// 一个类实现多个接口
class Circle implements Drawable, Movable {
    private int radius; // 实例变量

    public Circle(int radius) {
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("Circle has been drawn");
    }

    @Override
    public void moveTo(int x, int y) {
        System.out.println("Circle moved to x=" + x + ", y=" + y);
    }

    // 使用default方法
    public void moveWithDefault() {
        defaultMove();
    }
}
```

#### 四、核心要点总结

1. **本质差异**：抽象类是"不完整的类"，侧重于**代码复用**和**状态共享**；接口是"行为契约"，侧重于**功能定义**和**解耦设计**。

2. **继承限制**：抽象类遵循Java单继承原则，一个类只能有一个直接父类；接口支持多重继承，一个类可同时实现多个接口，这是解决Java单继承限制的关键机制。

3. **状态管理**：抽象类可以维护对象状态（拥有实例变量），适合需要共享状态的场景；接口不能包含实例变量，是无状态的，更适合纯行为定义。

4. **演进趋势**：随着Java版本演进，接口功能不断增强（Java 8的default/static方法，Java 9的private方法），但在设计原则上仍应坚持"接口定义行为，抽象类提供实现"的核心理念。

5. **设计原则**：在实际开发中，应遵循"**优先使用接口，后考虑抽象类**"的原则。当需要定义跨类族的通用行为或实现多重继承时，选择接口；当多个相关类需要共享代码实现、维护对象状态或需要构造器初始化时，选择抽象类。这种合理的选择能够提高代码的可维护性、扩展性和复用性，符合面向对象设计的核心原则。

## 二、程序分析（3 道 30 分）

### 内部类

> [Inner Class in Java | GeeksforGeeks](https://www.geeksforgeeks.org/java/inner-class-java)

### 文件读写填空

Stream,
StreamReader,
IOException,
new FileInputStream(),
new InputStreamReader(),
new BufferedReader().readLine()

可参考

> [Java 语言 -2025fa-yy 重点 #IO 流 | HeZzz](http://hez2z.github.io/2025/11/04/Java%E8%AF%AD%E8%A8%80-2025fa-yy%E9%87%8D%E7%82%B9/#IO%E6%B5%81)
>
> [Java 语言 - 2023fa - 回忆版 #IO 缺语句填空 | HeZzz](http://hez2z.github.io/2025/11/05/Java%E8%AF%AD%E8%A8%80-2023fa-%E5%9B%9E%E5%BF%86%E7%89%88/#IO-%E7%BC%BA%E8%AF%AD%E5%8F%A5%E5%A1%AB%E7%A9%BA%EF%BC%88%E9%87%8D%E7%82%B9%E5%86%85%E5%AE%B9%EF%BC%89)

### 异常处理

**try,catch,finally;catch 后 try 中的代码是否继续执行?**

可参考

> [Java 语言 - 2025fa - yy 重点 #异常处理 | HeZzz](http://hez2z.github.io/2025/11/04/Java%E8%AF%AD%E8%A8%80-2025fa-yy%E9%87%8D%E7%82%B9/#%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86)
>
> [Java 语言 - 2023fa - 回忆版 #try-catch 的执行过程 | HeZzz](https://hez2z.github.io/2025/11/05/Java%E8%AF%AD%E8%A8%80-2023fa-%E5%9B%9E%E5%BF%86%E7%89%88/#try-catch-%E7%9A%84%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B)

## 三、综合题（3 道 30 分）

### 集合五个数存储并排序输出

```Java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class NumberSorter {
    public static void main(String[] args) {
        // 创建集合存储数字
        ArrayList<Integer> numbers = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        // 输入5个数字
        System.out.println("请输入5个整数（每行一个）：");
        for (int i = 0; i < 5; i++) {
            System.out.print("数字 " + (i + 1) + ": ");
            numbers.add(scanner.nextInt());
        }

        // 排序集合
        Collections.sort(numbers);

        // 输出排序结果
        System.out.println("\n排序后的结果：");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        scanner.close();
    }
}
```

### GUI 编程

**Flow 布局。数 1，数 2，最大公约数，最小公倍数的输入框。计算，退出按钮.**

```Java

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class GCDLCDCalculator extends JFrame {

    private final JTextField num1Field;
    private final JTextField num2Field;
    private final JTextField gcdField;
    private final JTextField lcmField;

    public GCDLCDCalculator() {
        // 设置窗口标题
        setTitle("最大公约数和最小公倍数计算器");

        // 设置窗口关闭操作
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // 设置 FlowLayout 布局
        setLayout(new FlowLayout(FlowLayout.CENTER, 50, 50));

        // 创建标签和输入框
        JLabel num1Label = new JLabel("数 1:");
        num1Field = new JTextField(10);

        JLabel num2Label = new JLabel("数 2:");
        num2Field = new JTextField(10);

        JLabel gcdLabel = new JLabel("最大公约数:");
        gcdField = new JTextField(10);
        gcdField.setEditable(false); // 结果框不可编辑

        JLabel lcmLabel = new JLabel("最小公倍数:");
        lcmField = new JTextField(10);
        lcmField.setEditable(false); // 结果框不可编辑

        // 创建按钮
        JButton calculateButton = new JButton("计算");
        JButton exitButton = new JButton("退出");

        // 添加组件到窗口
        add(num1Label);
        add(num1Field);
        add(num2Label);
        add(num2Field);
        add(gcdLabel);
        add(gcdField);
        add(lcmLabel);
        add(lcmField);
        add(calculateButton);
        add(exitButton);

        // 为计算按钮添加事件监听器
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                calculator();
            }
        });

        // 为退出按钮添加事件监听器
        exitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        // 设置窗口大小和位置
        setSize(300, 500);
        setLocationRelativeTo(null); // 居中显示
        setResizable(false); // 禁止调整大小
    }

    public static void main(String[] args) {
        // 在事件调度线程中创建和显示GUI
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new GCDLCDCalculator().setVisible(true);
            }
        });
    }

    // 计算最大公约数（欧几里得算法）
    private int calculateGCD(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // 计算最小公倍数
    private int calculateLCM(int a, int b, int gcd) {
        return Math.abs(a * b) / gcd;
    }

    // 执行计算
    private void calculator() {
        try {
            // 获取输入值
            int num1 = Integer.parseInt(num1Field.getText().trim());
            int num2 = Integer.parseInt(num2Field.getText().trim());

            // 检查是否为0
            if (num1 == 0 || num2 == 0) {
                JOptionPane.showMessageDialog(this,
                        "输入的数字不能为零！",
                        "输入错误",
                        JOptionPane.ERROR_MESSAGE);
                return;
            }

            // 计算最大公约数
            int gcd = calculateGCD(num1, num2);

            // 计算最小公倍数
            int lcm = calculateLCM(num1, num2, gcd);

            // 显示结果
            gcdField.setText(String.valueOf(gcd));
            lcmField.setText(String.valueOf(lcm));

        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this,
                    "请输入有效的整数！",
                    "输入错误",
                    JOptionPane.ERROR_MESSAGE);
            // 清空输入框
            num1Field.setText("");
            num2Field.setText("");
            gcdField.setText("");
            lcmField.setText("");
            // 重新聚焦到第一个输入框
            num1Field.requestFocus();
        }
    }
}
```

### 接口编程

Rectangle 类实现接口，接口里声明求面积，周长的方法，再写个类生成 Rectangle 对象，调用其中的 toString 方法输出他的宽，高，周长，面积

```Java
// 定义接口 ShapeOperations，声明求面积和周长的方法
interface ShapeOperations {
    double area();      // 求面积
    double perimeter(); // 求周长
}

// Rectangle 类实现 ShapeOperations 接口
class Rectangle implements ShapeOperations {
    private double width;  // 矩形宽度
    private double height; // 矩形高度

    // 构造器
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    // 实现 area 方法
    @Override
    public double area() {
        return width * height;
    }

    // 实现 perimeter 方法
    @Override
    public double perimeter() {
        return 2 * (width + height);
    }

    // 重写 toString 方法，输出宽、高、周长、面积
    @Override
    public String toString() {
        return "Rectangle [Width: " + width + ", Height: " + height +
               ", Perimeter: " + perimeter() + ", Area: " + area() + "]";
    }
}
```

### 线程

编写线程, run 方法控制台循环读入数，求读入的所有数的最小数，最大数，平均值，再启动该线程

```Java
import java.util.ArrayList;
import java.util.Scanner;

class NumberStatsThread extends Thread {
    private ArrayList<Integer> numbers = new ArrayList<>();

    @Override
    public void run() {
        Scanner scanner = new Scanner(System.in);
        String input;
        System.out.println("请输入整数（输入 'exit' 结束）：");

        // 循环读入数字
        while (true) {
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("exit")) {
                break;
            }
            try {
                int num = Integer.parseInt(input);
                numbers.add(num);
            } catch (NumberFormatException e) {
                System.out.println("请输入有效的整数或 'exit' 结束。");
            }
        }

        // 计算最小值、最大值和平均值
        if (numbers.size() > 0) {
            int min = numbers.get(0);
            int max = numbers.get(0);
            int sum = 0;

            for (int num : numbers) {
                if (num < min) min = num;
                if (num > max) max = num;
                sum += num;
            }

            double average = (double) sum / numbers.size();

            // 输出结果
            System.out.println("最小值: " + min);
            System.out.println("最大值: " + max);
            System.out.println("平均值: " + average);
        } else {
            System.out.println("没有输入任何数字。");
        }

        scanner.close();
    }
}
public class NumberStats {
    public static void main(String[] args) {
        NumberStatsThread statsThread = new NumberStatsThread();
        statsThread.start(); // 启动线程
    }
}
```
