@protocol: 'rest'

service product {
    function printhelloworld(input : String) returns String;

    function addition(num1 : Integer, num2 : Integer) returns Integer;

    @open
    type object {};
    function myFunction(catogery : Integer) returns object;    
}

