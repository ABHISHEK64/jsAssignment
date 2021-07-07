/** OLd Question code  employee and emp1 is not define 
var Employee ={company: 'Rohit'}
var Emp1 = Object.create(employee);
delete Emp1.company;
 console.log(emp1.company);
 */
/**
 * Correct Code
 */
 var Employee ={company: 'Rohit'}
 var Emp1 = Object.create(Employee);
 delete Emp1.company;
  console.log(Emp1.company);

  /**
   * output show 'Rohit';
   */