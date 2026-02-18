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

  String? name;
  print(name.toString());
  print(name.hashCode);
}
