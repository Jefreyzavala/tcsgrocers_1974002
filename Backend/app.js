let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

// database url details
let url = "mongodb://localhost:27017/TCSCapstone";

// middleware enable data from post method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//database connection without warning
const mongooseDbOptions = {
  // to avoid warnings with mongobd
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(url, mongooseDbOptions);


mongoose.connection;


var AdminRouter = require("./routers/admin.router");

var ProductRotuer = require("./routers/product.router");

var User = require("./routers/user.router.js");

var EmployeeRouter = require("./routers/employee.router");



// http://localhost:9090/admin_dashboard/storeProductDetails/         {"pname":"laptop","price":1500,"pquantity":50}
// http://localhost:9090/admin_dashboard/deleteProductByName/pname   
// http://localhost:9090/admin_dashboard/updateProductDetails         {"pname":"tv","price":567,"pquantity":89}   
// http://localhost:9090/employee/storeRequest/                       {"request":"Please change the car price"}  sarafudeen API
// http://localhost:9090/employee/viewRequest/
// http://localhost:9090/employee/add-emp-details/
// http://localhost:9090/employee/delete_emp_by_email/:email_id
// http://localhost:9090/employee/checkCredentials/
// http://localhost:9090/employee/editProfile
// http://localhost:9090/employee/get-emp-details/
// http://localhost:9090/employee/editEmpStatus/
// http://localhost:9090/user/signup
// http://localhost:9090/user/signin
// http://localhost:9090/user/raiseTicket
// http://localhost:9090/user/getraiseTicket
// http://localhost:9090/user/editUserProfile
// http://localhost:9090/admin_dashboard/getProductDetails
// http://localhost:9090/user/addToCart
// http://localhost:9090/user/deleteFromCart/car
// http://localhost:9090/user/viewCartItems/
// http://localhost:9090/user/addFunds
// http://localhost:9090/user/getFunds
// http://localhost:9090/admin_dashboard/deleteRequest/:request
// http://localhost:9090/user/updateIncorrectCount
// http://localhost:9090/user/updateIncorrectlock
// http://localhost:9090/user/deleteTicket/:email
// http://localhost:9090/user/updateCartItems
// http://localhost:9090/user/updateCartItemsCancel
// http://localhost:9090/user/viewCartItemsReport/

app.use("/admin_dashboard", AdminRouter);
// middleware
app.use("/user", User);


app.use("/product", ProductRotuer);

app.use("/employee", EmployeeRouter);

app.listen(9090, () => console.log("Running on server 9090"));