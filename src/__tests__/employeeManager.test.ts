import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
  describe("challenge 3", () => {
    it("1) can add a new employee", async () => {
      await em.addEmployee();
      await em.selectEmployeeByName("New Employee");
      await em.editEmployee({
        name: "Steven G",
        phone: "0505050505",
        title: "teacher",
      });
      await em.saveChanges();
      await em.selectEmployeeByName("Dollie Berry");
      await em.selectEmployeeByName("Steven G");
      let employee = await em.getEmployeeInfo();
      expect(employee.name).toEqual("Steven G");
      expect(employee.phone).toEqual("0505050505");
      expect(employee.title).toEqual("teacher");
    });
    it("2) can cancel an edit", async () => {
      await em.selectEmployeeByName("Eve Sparks");
      await em.editEmployee({ title: "Police" });
      await em.cancelChanges();
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 9,
        name: "Eve Sparks",
        phone: "8734567810",
        title: "Product Manager", 
      });
    });
    it("3) can navigate away and back without saving the edit", async () => {
      await em.selectEmployeeByName("Lois Brewer");
      await em.editEmployee({ title: "otter" });
      await em.selectEmployeeByName("Phillip Weaver");
      await em.selectEmployeeByName("Lois Brewer");
      let employee = await em.getEmployeeInfo();
      expect(employee).toEqual({
        id: 10,
        name: "Lois Brewer",
        phone: "8749823456",
        title: "Sales Manager", 
      });
    });
  });
});


