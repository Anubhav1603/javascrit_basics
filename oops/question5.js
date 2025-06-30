// Create a class with a getter and setter for a full name, which combines firstName and lastName.

class Details {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  getter = () => {
    return this.first_name + " " + this.last_name;
  };
  setter = (first_name, last_name) => {
    this.first_name = first_name;
    this.last_name = last_name;
    return console.log(`Name has been set to ${first_name} ${last_name}`);
  };
}

const details = new Details("Anubhav", "Sinha");
console.log(details.getter());
details.setter("Tony", "Stark");
