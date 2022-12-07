//
// Input:
// Output:

interface AddStaffMember {
  name: string;
  age: number;
}

interface RemoveStaffMember {
  name: string;
}

class StaffList {
  staff: string[];

  constructor() {
    this.staff = [];
  }

  add({ name, age }: AddStaffMember) {
    if (age < 20) throw new Error("Staff member age must be greater than 20");
    this.staff.push(name);
  }

  remove({ name }: RemoveStaffMember) {
    const isMember = this.staff.indexOf(name);

    if (isMember === -1) throw new Error("Member does not exist");
    this.staff.splice(isMember, 1);
  }

  getSize() {
    return this.staff.length;
  }
}

let list = new StaffList();
list.add({ name: "Kayke", age: 28 });
list.add({ name: "Kaykola", age: 23 });
list.remove({ name: "Kaykola" });
console.log(list.getSize());
console.log(list);
