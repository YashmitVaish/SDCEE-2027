import React from "react";
import "./Three.css";
import ip from "./inPersonSchedule.png";
import vs from "./virtualSchedule.png";
import ab from "./AbstractBooklet.png";

export default function Three() {
  return (
    <div className="three" id="dates">
      <div className="wrapper">
        <h1>IMPORTANT DATES</h1>

        <hr />

        <div className="dates-content">
          <div className="timeline">
            <ul>
              <li>
                <strong>Last Date of Abstract Submissions :</strong>{" "}
                <b>October 31, 2026</b>
              </li>

              <li>
                <strong>Early Bird Registration (deadline) :</strong>{" "}
                <b>December 20, 2026</b>
              </li>

              <li>
                <strong>Full Paper (Selected) submission : </strong>{" "}
                <b>January 15, 2027 - February 15, 2027</b>
              </li>

              <li>
                <strong>Conference Date :</strong>{" "}
                <b>February 18-20, 2027</b>
              </li>
            </ul>
          </div>

          <div className="schedule">
            <div className="schedule-button">
              <a
                href="https://cdn.discordapp.com/attachments/1096822198775316490/1209499048822710292/Conference_Schedule_In-person-updated.pdf?ex=65e724c4&is=65d4afc4&hm=c5640a98c469fe68c3a4df6abadc9c5ef38ec3f8d230fe329000c59e58a24deb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ip}
                  alt="In-Person Schedule QR Code"
                  className="qrcode"
                />
                <button type="button">In-Person Schedule</button>
              </a>
            </div>

            <div className="schedule-button">
              <a
                href="https://cdn.discordapp.com/attachments/1096822198775316490/1209502935814508616/Conference_Schedule_Virtual-updated.pdf?ex=65e72863&is=65d4b363&hm=1d79a78673a7b86163e87cd7a587c02f631fbd3d8029a00a0e390bc7f42f874e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={vs}
                  alt="Virtual Schedule QR Code"
                  className="qrcode"
                />
                <button type="button">Virtual Schedule</button>
              </a>
            </div>

            <div className="schedule-button">
              <a
                href="https://cdn.discordapp.com/attachments/1096822198775316490/1209905708292902962/ABSTRACT_BOOKLET_SDCEE.pdf?ex=65e89f7f&is=65d62a7f&hm=a48bd40ea8a38f9440e5098c6447636df5299dee7c55ceb4373a615402ba5311"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ab}
                  alt="Abstract Booklet QR Code"
                  className="qrcode"
                />
                <button type="button">Abstract Booklet</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}