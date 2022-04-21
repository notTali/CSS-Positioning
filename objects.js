
let user = {
    name: "Talifhani",
    age: 23,
    location: "Cape Town",
    blogs: ["How to study", "Cooking fish"],

    login() {
        return `${this.name} has logged in.`;
    },

    logBlogs() {
        console.log("User wrote the following blogs:");
        // console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log("--- " + blog);
        });
    }
};

//updating object properties.
// user.age = 22;
// user["name"] = "Tali";

//accessing object properties.
// console.log(user.age, user.name);
// console.log(user["location"]); 
console.log(user.login());

user.logBlogs();
// let upper = user.name.toUpperCase();
// console.log(upper);
