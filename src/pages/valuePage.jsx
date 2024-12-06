import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import ValuesBox from "../components/ValuesBox";
import Ball from "../assets/ball.png";
import Book from "../assets/books.png";
import Badge from "../assets/badge.png";
import Flash from "../assets/flash.png";
import Heart from "../assets/heart.png";
import Footer from "../components/footer";

function ValuePage() {
  return (
    <>
      <Navbar />
      <div className="flex-col md:flex md:flex-row mx-5  mt-16 item-center justify-center gap-5">
        <div className="flex flex-col gap-5">
          <h1>Our Values</h1>
          <p>What we love and stand for every day</p>
          <ValuesBox
            icon={Book}
            title="Reliabality"
            point1="We are open as a team and as a product."
            point2="We don’t put walls up unless it’s necessary."
            point3="We become better when we share information."
            point4="We are open to diversity of opinion, backgrounds, and thought."
            bgColor="bg-neutral-200"
          />
          <ValuesBox
            icon={Ball}
            title="Online Access"
            point1="We play because we’re a creator tool."
            point2="Life is short. Let's build something meaningful."
            point3="We play as a team because great teams build great things together."
            point4="We keep those standards high."
            bgColor="bg-blue-100"

          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <ValuesBox
            icon={Badge}
            title="Professinol Partners"
            point1="We want the best for our customers and ourselves."
            point2="We coach people to their best potential."
            point3="That's why an '''Arcader''' is both a teammate and a customer."
            // point4="We are open to diversity of opinion, backgrounds, and thought."
            bgColor="bg-green-50"
          />
          <ValuesBox
            icon={Flash}
            title="Fast Service"
            point1="We act like owners."
            point2="Let’s empower each other."
            point3="If we see something that needs change, we lead through it."
            // point4="We are open to diversity of opinion, backgrounds, and thought."
          />
          <ValuesBox
            icon={Heart}
            title="Trusted"
            point1="We can be honest and kind."
            point2="We can have high standards and be kind."
            point3="We can say no and be kind."
            point4="Kindness can vary across cultures, upbringings, and languages - but we try our best to be kind."
            bgColor="bg-emerald-50"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ValuePage;
