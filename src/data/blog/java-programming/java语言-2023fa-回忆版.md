---
title: "Java语言-2023fa-回忆版"
author: "HeZzz"
pubDatetime: 2025-11-05T13:32:28.000+08:00
slug: "java语言-2023fa-回忆版"
tags:
  - "Java"
  - "语法"
description: "Java 语言及网络编程 2023 秋季学期的回忆版真题整理。"
---

> Java 语言及网络编程 2023 秋季学期 的回忆版真题，来源于[计算机速通之家 | QQ 群号：468081841](https://qm.qq.com/q/ojSHMvHG5a)。
>
> 本文连载于[Java语言-2023fa-回忆版 | HeZzz](https://hez2z.github.io/2025/11/05/Java%E8%AF%AD%E8%A8%80-2023fa-%E5%9B%9E%E5%BF%86%E7%89%88).

🙇‍♂️🙇‍♂️🙇‍♂️时间仓促，有不足之处烦请及时告知。[邮箱hez2z@foxmail.com](mailto:hez2z@foxmail.com) 或者在 [速通之家](https://qm.qq.com/q/ojSHMvHG5a) 群里 `@9¾`。

## Java 编写程序和运行的过程

### static/final 分别能修饰什么（类，成员，方法，接口等）

#### static 可修饰

- **类**：静态内部类
- **成员变量**：静态变量（类变量）
- **方法**：静态方法
- **代码块**：静态代码块
- **接口**：接口中所有变量默认是 static final

#### final 可修饰

- **类**：不能被继承
- **成员变量**：常量（必须初始化）
- **方法**：不能被重写
- **局部变量**：一旦赋值不可改变
- **方法参数**：在方法内部不可修改

#### 示例代码

```Java
// static 示例
class StaticExample {
    static int staticVar = 0;

    static {
        System.out.println("静态代码块执行");
    }

    static void staticMethod() {
        System.out.println("静态方法");
    }
}

// final 示例
final class FinalClass {
    final int finalVar = 10;

    final void finalMethod() {
        // final 方法
    }
}
```

## 静态绑定与动态绑定

### 静态绑定（编译时绑定）

- **特点**：在编译阶段确定调用的方法
- **适用场景**：
  - static 方法
  - private 方法
  - 构造方法
  - final 方法

### 动态绑定（运行时绑定）

- **特点**：在运行阶段确定调用的方法
- **实现机制**：通过虚方法表（vtable）实现
- **适用场景**：非 static、非 private 的实例方法

#### 示例

```Java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class BindingExample {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound(); // 动态绑定，输出 "Dog barks"
    }
}
```

## 继承中子类构造方法的顺序

### 对象初始化顺序

1. 若是首次加载类，先执行父类的静态代码块，再执行子类的静态代码块。这种操作只执行一次。
2. 初始化父类的其他数据域(若存在未赋值的成员变量，则赋默认值)。
3. 调用父类的构造方法。若子类的构造方法中没有显式调用父类的构造方法，则默认调用父类的无参构造方法。（若父类没有无参构造方法，则编译报错）
4. 初始化子类的其他数据域(若存在未赋值的成员变量，则赋默认值)。
5. 执行子类的构造方法中余下的操作。

## 线程同步/异步的概念

根据从GeeksforGeeks、W3Schools和官方文档搜索到的信息，我来为您详细解释Java中线程同步/异步的概念：

### 线程同步（Synchronization）

**基本概念：**
线程同步是Java中一种确保多个线程在访问共享资源时保持数据一致性的机制。

**重要性：**
在多线程环境中，当多个线程试图同时访问共享资源时，线程同步变得至关重要。

**实现机制：**
Java中的同步是通过监视器（monitors）概念实现的，每个对象在 Java 中都与一个监视器相关联，线程可以锁定或解锁该监视器。

**synchronized关键字：**
Java 提供了 `synchronized` 关键字作为修饰符，用于锁定方法，确保同一时间只有一个线程可以使用该方法。

**工作原理：**
当线程调用同步方法时，它会自动获取该方法对象的内在锁，并在方法返回时释放该锁。

### 线程异步（Asynchronous）

**基本概念：**
异步编程在 Java 中允许您并发执行任务，从而提高应用程序的整体性能和响应能力。

**特点：**
异步编程允许任务并发运行，实现非阻塞执行和更好的资源利用率。

**应用场景：**
异步处理指的是将阻塞操作分配给新线程，并立即将与请求关联的线程返回给调用者。

### 同步 vs 异步

**同步编程：**
同步编程要求任务按顺序执行，一个任务完成前下一个任务不能开始，这可能导致阻塞和性能问题。

**异步编程：**
异步编程允许任务在后台执行，主线程可以继续处理其他工作，提高了程序的响应性和效率。

**协调机制：**
Java 提供了多种同步器（synchronizers）来促进线程之间的协调，包括 Semaphore、CyclicBarrier 等。

### 实际应用考虑

**线程竞争：**
同步可能会引入线程竞争问题，当两个或多个线程同时尝试访问相同资源时就会发生这种情况。

**回调机制：**
回调函数的目的是通知 Sync/Async 类另一个类中的某些工作是否完成，这在异步编程中非常有用。

**现代异步工具：**
Java 提供了 `CompletableFuture` 等现代工具来简化异步编程，避免传统的"回调地狱"问题。

### 总结

线程同步是控制多个线程对共享资源访问的机制，确保数据一致性；而线程异步则是允许任务并发执行，提高程序性能和响应性。在实际开发中，需要根据具体场景选择合适的同步或异步策略，或者结合使用两者来构建高效、可靠的并发应用程序。

在多线程编程中，正确理解和使用同步机制可以防止竞态条件，而合理运用异步编程可以显著提升应用程序的吞吐量和用户体验。

## try-catch 的执行过程

```Java
try {
    statement1;
    statement2;
    statement3;
} catch (ExceptionType1 ex1) {

} catch (ExceptionType2 ex2) {

}

statement4;
```

回答下列问题：

1. `try-catch` 会执行 `statement3` 吗？

   会执行，前提是执行到 `statement3` 时没有抛出异常。`try` 块按顺序执行其内部语句；只要在执行到 `statement3` 之前没有发生未捕获的异常，`statement3` 会被执行。

2. 如果异常未被捕获，`statement4` 会执行吗？

   不会执行。如果 `try` 中或随后的调用链抛出的异常没有被本方法内的任何 `catch` 捕获，异常会向外抛出，当前方法的正常控制流被中断，随后语句（包括 `statement4`）不会执行，直到异常被上层调用者捕获或程序终止。

3. 如果 `catch` 中捕获了异常，`statement4` 会执行吗？

   会执行。若异常在某个 `catch` 块中被捕获并且该 `catch` 块正常完成（没有再次抛出异常），控制流会继续到 `try-catch` 之后，执行 `statement4`。

---

## IO 缺语句填空（重点内容）

代码: UseFileIO.java

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

## 事件管理器（Swing 事件处理）

事件源如果是组件，则需要继承如 `JFrame` 的父类，那么，新的类型可以通过同时实现监听器接口的方法实现事件源和事件监听器合而为一。一个事件源注册多个事件监听器。

代码：`MouseEventDemo.java`

> _省略 import 语句，可通过 IDE 自动导入！_

```Java
//既是事件源又是监听器
class MouseFrame extends JFrame implements MouseListener, MouseMotionListener {
    private JLabel statusbar;

    public MouseFrame() {
        super("鼠标事件示例");
        statusbar = new JLabel("这是状态栏");
        add(statusbar, BorderLayout.SOUTH);
        addMouseListener(this);
        addMouseMotionListener(this);
        setSize(300,200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //setVisible(true);
    }

    //以下是 MouseListener 接口方法
    public void mouseClicked(MouseEvent e) { statusbar.setText("您点击了窗口!"); }
    public void mouseExited(MouseEvent e) { statusbar.setText("鼠标离开了窗口!"); }
    public void mousePressed(MouseEvent e) { statusbar.setText("您按下了鼠标键!"); }
    public void mouseReleased(MouseEvent e) { }
    public void mouseEntered(MouseEvent e) { }

    //以下是 MouseMotionListener 接口方法
    public void mouseDragged(MouseEvent e) {
        String s = "鼠标拖拉: x=" + e.getX() + ", y=" + e.getY();
        statusbar.setText(s);
    }

    public void mouseMoved(MouseEvent e) {
        String s = "鼠标移动: x=" + e.getX() + ", y=" + e.getY();
        statusbar.setText(s);
    }
}

public class MouseEventDemo {
    public static void main(String[] args) {
        MouseFrame frame = new MouseFrame();
        SwingUtilities.invokeLater(() -> {
            frame.setVisible(true); // 显示窗口
        });
    }
}
```

---

## 两道编程题（50 分）

### 多线程银行取款

**要求**：实现多线程程序，演示两个人同时操作一个银行账户，都连续取钱。 Java 写上锁用 `synchronized` 关键字。

```Java
import java.util.Random;

class BankAccount {
    private int balance = 1000; // 初始余额设为1000，以便取款

    // 同步取款方法
    public synchronized void withdraw(int amount, String threadName) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println(threadName + "取款:" + amount + " 当前余额:" + balance);
        } else {
            System.out.println(threadName + "取款失败，余额不足! 当前余额:" + balance);
        }
    }
}

class WithdrawTask implements Runnable {
    private final BankAccount account;
    private final String threadName;

    public WithdrawTask(BankAccount account, String threadName) {
        this.account = account;
        this.threadName = threadName;
    }

    @Override
    public void run() {
        Random random = new Random();

        for (int i = 0; i < 5; i++) { // 每个线程取钱5次
            int amount = random.nextInt(300) + 100; // 随机金额[100, 400]
            account.withdraw(amount, threadName);
            try {
                Thread.sleep(200); // 模拟取款操作的延迟
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class BankSystem {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(); // 创建银行账户

        // 创建两个取钱线程
        Thread t1 = new Thread(new WithdrawTask(account, "张三"), "线程1");
        Thread t2 = new Thread(new WithdrawTask(account, "李四"), "线程2");

        // 启动线程
        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
            System.out.println("最终余额: " + account.getBalance());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

### 学生管理系统

**要求**：使用 `ArrayList` 类记录一组 `Student` 对象（可利用例7-15中定义的 `Student` ，也可自行定义），并在该数据结构基础上实现遍历、查询、删除对象的操作，并利用 `Collections` 类实现排序。

```Java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

class Student {
    String name;  // 姓名
    int id;       // 学号
    int score;    // 成绩

    public Student(String name, int id, int score) {
        this.name = name;
        this.id = id;
        this.score = score;
    }

    public int getScore() {
        return score;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "姓名:" + name + ", 学号:" + id + ", 成绩:" + score;
    }

    // 重写equals方法，用于按学号删除
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id;
    }
}

public class StudentManagementSystem {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();

        // 添加学生
        students.add(new Student("Alice", 1001, 85));
        students.add(new Student("Bob", 1002, 92));
        students.add(new Student("Charlie", 1003, 78));
        students.add(new Student("David", 1004, 88));

        System.out.println("=== 初始学生列表 ===");
        traverseStudents(students);

        // 查询操作
        System.out.println("\n=== 查询操作 ===");
        queryStudent(students, "Bob");
        queryStudent(students, "Eve");

        // 删除操作
        System.out.println("\n=== 删除操作 ===");
        deleteStudent(students, 1003);
        deleteStudent(students, 1005);

        System.out.println("\n=== 删除后的学生列表 ===");
        traverseStudents(students);

        // 使用Collections排序
        System.out.println("\n=== 使用Collections按成绩排序 ===");
        Collections.sort(students, Comparator.comparingInt(Student::getScore));
        traverseStudents(students);

        // 按学号排序
        System.out.println("\n=== 按学号排序 ===");
        Collections.sort(students, Comparator.comparingInt(Student::getId));
        traverseStudents(students);
    }

    // 遍历操作
    public static void traverseStudents(ArrayList<Student> students) {
        System.out.println("遍历所有学生:");
        for (Student student : students) {
            System.out.println(student);
        }
    }

    // 查询操作
    public static void queryStudent(ArrayList<Student> students, String name) {
        System.out.println("查询姓名为 " + name + " 的学生:");
        boolean found = false;
        for (Student student : students) {
            if (student.name.equals(name)) {
                System.out.println("找到: " + student);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("未找到姓名为 " + name + " 的学生");
        }
    }

    // 删除操作
    public static void deleteStudent(ArrayList<Student> students, int id) {
        System.out.println("尝试删除学号为 " + id + " 的学生:");
        Student toRemove = null;
        for (Student student : students) {
            if (student.getId() == id) {
                toRemove = student;
                break;
            }
        }

        if (toRemove != null && students.remove(toRemove)) {
            System.out.println("删除成功: " + toRemove);
        } else {
            System.out.println("未找到学号为 " + id + " 的学生");
        }
    }
}
```
