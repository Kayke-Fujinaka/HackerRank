class StaffList {
  constructor() {
    this.staff = [];
  }

  add(name, age) {
    if (age < 20) throw new Error("Staff member age must be greater than 20");
    this.staff.push(name);
  }

  remove(name) {
    const isMember = this.staff.indexOf(name);

    if (isMember === -1) throw new Error("Member does not exist");

    this.staff.splice(name, 1);
  }

  getSize() {
    return this.staff.length;
  }
}

let list = new StaffList();
list.add("Kayke", 28);
list.add("Kayke", 28);
list.remove("Kayke");
console.log(list.getSize());
console.log(list);
