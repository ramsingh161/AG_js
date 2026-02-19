import 'dart:io'; // for imput and output from user

void main() {
  // print("hello");
  // var a="jello";
  // var b=20;
  // print(a.runtimeType);
  // print(b.runtimeType);

  // var a='hello'; // for varf data type changing value is not possible
  // a = 10;
  // print(a);

  // dynamic a = 'hello'; // for dynamic data type changing value is possible
  // a = 10;
  // print(a);

  // object a = 'hello'; // for object data type changing value is possible
  // a = 10;
  // print(a);

  // Object a = "hello";
  // print(a);
  // print(a.length); // Object data type does not have length property, it will give an error

  // dynamic a = "hello";
  // print(a);
  // print(a.length);

  //for null safety if we add question mark after data type then it will allow null value otherwise the datatype cannot have a null value
  // String? a = null;
  // print(a);
  // string b = null;  //this gives an error because string data type cannot have null value
  // print(b);

  // String? name;
  // print(name.toString());
  // print(name.hashCode);

  //late variable is a variable that is initialized later
  // late String name;
  // name = "hello";
  // print(name);

  // final will work on runtime and const will work on compile time
  // final time = DateTime.now();
  // print(time);

  // final list= [1, 2, 3, 4];
  // list.add(6);
  // print(list);

  // var hex = 0xABCDF;
  // print(hex.runtimeType);
  // print(hex);

  // var v = 1.1;
  // double v1 = 1.32e5;
  // print(v.runtimeType);
  // print(v1);
  // print(v1.runtimeType);

  // var one = int.parse('1');
  // assert(one == 1);//asert only shows a message when the condition is false,

  //strint to double
  // var one = double.parse('1.1');
  // assert(one == 1.1);

  //integer to string
  // var one = 1.toString();
  // assert(one == '1');

  // String fname = "John";
  // String lname = "doe";
  // print("$fname $lname");

  // print("first number");
  // double num1 = double.parse(stdin.readLineSync()!);
  // print("second number");
  // double num2 = double.parse(stdin.readLineSync()!);
  // double sum = num1 + num2;
  // print(sum);

  // print("age:");
  // int age = int.parse(stdin.readLineSync()!);
  // if(age >= 18){
  //   print("you are eligible to vote");
  // }
  // else {
  //   print("you are not eligible to vote");
  //   }

  // List<String> names = ["john", "doe", "smith"];
  // for(int i = 0; i < names.length; i++){
  //   print(names[i]);
  //   print(names.length);
  // }


  //electricity consumption program 
  // unit range 0-100 = 1.5 rs/unit
  // unit range 101-200 = 2.5 rs/unit
  // unit range 201-300 = 4.0 rs/unit
  // unit range above 300 = 5.0 rs/unit
  // print("enter the number of units consumed:");
  // int u = int.parse(stdin.readLineSync()!);
  // double bill;
  // if(u <= 100){
  //   bill = u * 1.5;
  // }
  // else if(u <= 200){
  //   bill = (100 * 1.5) + ((u - 100) * 2.5);
  // }
  // else if(u <= 300){
  //   bill = (100 * 1.5) + (100 * 2.5) + ((u - 200) * 4.0);
  // }
  // else {
  //   bill = (100 * 1.5) + (100 * 2.5) + (100 * 4.0) + ((u - 300) * 5.0);
  // }
  // print(bill);


  
}
