import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ClubAuthenticationRouter from "./routes/ClubAuthentication.js";
import FCAuthenticationRouter from "./routes/FCAuthentication.js";
import DSWAuthenticationRouter from "./routes/DSWAuthentication.js";
import ProposalRouter from "./routes/Proposal.js";

const app = express();
dotenv.config();

mongoose
	.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

//error "handler"
app.use(function (err, req, res, next) {
	res.status(500).send("Something went wrong with the server");
});

app.use(
	cors({
		origin: true,
		credentials: true,
		methods: ["GET", "POST", "DELETE", "OPTIONS"],
		optionsSuccessStatus: 200
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/clubAuth", ClubAuthenticationRouter);
app.use("/api/FCAuth", FCAuthenticationRouter);
app.use("/api/DSWAuth", DSWAuthenticationRouter);
app.use("/api/proposal", ProposalRouter);

app.listen(parseInt(process.env.PORT), () =>
	console.log("API listening on port " + process.env.PORT)
);
