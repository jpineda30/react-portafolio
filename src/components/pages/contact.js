import React from "react";
import Header from "../header";

function Contact() {
  return (
    <div className="flex-col flex-center contents">
      <div className="s1b">
        <Header />
        <div class="flex-col flex-center m-6 info-content">
          <h1 class="has-text-white has-text-centered is-size-4">
            <i></i>Contact Info
          </h1>
          <h1 class="has-text-white has-text-centered">
            <i class="fas fa-envelope fa-1x"></i> jose.pinedaesquer@gmail.com
          </h1>
          <h1 class="has-text-white has-text-centered">
            <i class="fab fa-whatsapp fa-1x"></i> +52 6681451805
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
