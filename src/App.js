import "./styles.css";
import "./usrngen.js";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">User SignUp</h1>
      <div className="form">
        <div className="fields">
          <div className="field">
            <div className="label input select">
              <h1 className="title2">Personal Data</h1>
              <div>
                <label htmlFor="textbox">Name:</label>
                <input
                  maxLength="28"
                  size="30"
                  type="text"
                  pattern="/^[A-Za-z]+$/"
                  placeholder="First Name"
                />
              </div>
              <br />
              <div>
                <label htmlFor="textbox">Surname:</label>
                <input
                  maxLength="28"
                  size="30"
                  type="text"
                  pattern="/^[A-Za-z]+$/"
                  placeholder="Last Name"
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="textbox">Age:</label>
                  <select
                    id="select1"
                    onChange={(event) =>
                      (document.getElementById(
                        "select2"
                      ).value = document.getElementById("select1").value)
                    }
                  >
                    <option value="0">Your Age</option>
                    <option value="1">16</option>
                    <option value="2">17</option>
                    <option value="3">18</option>
                    <option value="4">19</option>
                    <option value="5">20</option>
                    <option value="6">21</option>
                    <option value="7">22</option>
                    <option value="8">23</option>
                    <option value="9">24</option>
                    <option value="10">25</option>
                    <option value="11">26</option>
                    <option value="12">27</option>
                    <option value="13">28</option>
                    <option value="14">29</option>
                    <option value="15">30</option>
                    <option value="16">31</option>
                  </select>
                </div>
                <br />
                <div>
                  <label htmlFor="textbox">Birth Year:</label>
                  <select
                    id="select2"
                    onChange={(event) =>
                      (document.getElementById(
                        "select1"
                      ).value = document.getElementById("select2").value)
                    }
                  >
                    <option value="0">Your Birth Year</option>
                    <option value="1">2005</option>
                    <option value="2">2004</option>
                    <option value="3">2003</option>
                    <option value="4">2002</option>
                    <option value="5">2001</option>
                    <option value="6">2000</option>
                    <option value="7">1999</option>
                    <option value="8">1998</option>
                    <option value="9">1997</option>
                    <option value="10">1996</option>
                    <option value="11">1995</option>
                    <option value="12">1994</option>
                    <option value="13">1993</option>
                    <option value="14">1992</option>
                    <option value="15">1991</option>
                    <option value="16">1990</option>
                  </select>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="label input select">
              <h1 className="title2">Location Data</h1>
              <div>
                <label htmlFor="textbox">Postal Code:</label>
                <input
                  id="pcn"
                  maxLength="128"
                  size="30"
                  type="text"
                  placeholder="94303"
                  onInput={(event) =>
                    (document.getElementById("pcn").value = document
                      .getElementById("pcn")
                      .value.replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1"))
                  }
                />
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor="textbox">Country:</label>
                  <select
                    id="country"
                    onChange={(event) => (
                      (document.getElementById(
                        "code"
                      ).value = document.getElementById("country").value),
                      (document.getElementById(
                        "city"
                      ).value = document.getElementById("country").value)
                    )}
                  >
                    <option value="c1">USA</option>
                    <option value="c2">Russia</option>
                    <option value="c3">Spain</option>
                    <option value="c4">Mexico</option>
                    <option value="c5">Argentina</option>
                    <option value="c6">Brazil</option>
                    <option value="c7">China</option>
                    <option value="c8">India</option>
                  </select>
                </div>
                <br />
                <div>
                  <label htmlFor="textbox">City:</label>
                  <select
                    id="city"
                    onChange={(event) => (
                      (document.getElementById(
                        "country"
                      ).value = document.getElementById("city").value),
                      (document.getElementById(
                        "code"
                      ).value = document.getElementById("city").value)
                    )}
                  >
                    <option value="c1">NYC</option>
                    <option value="c2">Moscow</option>
                    <option value="c3">Barcelona</option>
                    <option value="c4">Monterrey</option>
                    <option value="c5">Buenos Aires</option>
                    <option value="c6">San Paulo</option>
                    <option value="c7">Shenzen</option>
                    <option value="c8">New Delhi</option>
                  </select>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor="textbox">Address:</label>
                <input
                  maxLength="128"
                  size="30"
                  type="text"
                  placeholder="301 Hamilton Av"
                />
              </div>
              <br />
            </div>
          </div>
          <div className="field">
            <div className="label input select">
              <h1 className="title2">Rregistration Data</h1>
              <div styles="display: flex">
                <label htmlFor="textbox">Username:</label>
                <input id="uname" maxLength="128" size="30" type="text" />
                <h2 className="help-tip">
                  <p>
                    This Username is randomly generated! It can be freely
                    changed for another unique one, as desierd.
                  </p>
                </h2>
              </div>
              <br />
              <div>
                <label htmlFor="textbox">Email:</label>
                <input
                  id="email"
                  maxLength="128"
                  size="30"
                  type="text"
                  placeholder="exemple@server.com"
                  onChange={(event) => {
                    if (
                      document
                        .getElementById("email")
                        .value.includes("@gmail.com") ||
                      document
                        .getElementById("email")
                        .value.includes("@hotmail.com") ||
                      document
                        .getElementById("email")
                        .value.includes("@outlook.com")
                    ) {
                      document.getElementById("email").style.borderColor =
                        "green";
                      setTimeout(() => {
                        document.getElementById("email").style.borderColor =
                          "#fcfcfc";
                      }, 2000);
                    } else {
                      document.getElementById("email").style.borderColor =
                        "red";
                    }
                  }}
                />
              </div>
            </div>
            <div className="label input2 select2">
              <br />
              <div>
                <label htmlFor="textbox">Phone:</label>
                <select
                  id="code"
                  styles="width: 10px;"
                  onChange={(event) => (
                    (document.getElementById(
                      "country"
                    ).value = document.getElementById("code").value),
                    (document.getElementById(
                      "city"
                    ).value = document.getElementById("code").value)
                  )}
                >
                  <option value="c1">+1</option>
                  <option value="c2">+7</option>
                  <option value="c3">+34</option>
                  <option value="c4">+52</option>
                  <option value="c5">+54</option>
                  <option value="c6">+55</option>
                  <option value="c7">+86</option>
                  <option value="c8">+91</option>
                </select>
                &nbsp;
                <input
                  id="num"
                  maxLength="128"
                  size="30"
                  type="text"
                  placeholder="NPA-NXX-XXXX"
                  onInput={(event) =>
                    (document.getElementById("num").value = document
                      .getElementById("num")
                      .value.replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1"))
                  }
                />
              </div>
              <br />
            </div>
          </div>
          <div id="hish" className="field2">
            <table className="label">
              <thead className="table">
                <tr className="table">
                  <td className="table"> ID </td>
                  <td className="table"> Username </td>
                  <td className="table"> Email </td>
                </tr>
              </thead>
              <tbody id="Table" className="table"></tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <div className="buttons">
        <button
          id="btn"
          className="btn"
          onClick={(event) => {
            if (document.getElementById("email").value === "") {
              alert("You must provaid an email address!");
            } else {
              var table = document.getElementById("Table");
              var id = (Math.floor(Math.random() * 100) + 1).toString();
              var row = table.insertRow(-1);
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              cell1.innerHTML = id;
              cell2.innerHTML = document.getElementById("uname").value;
              cell3.innerHTML = document.getElementById("email").value;
              window.localStorage.setItem("id", id);
              window.localStorage.setItem(
                "user",
                document.getElementById("uname").value
              );
              window.localStorage.setItem(
                "email",
                document.getElementById("email").value
              );
              document.getElementById("btn").classList.add("hide");
            }
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
