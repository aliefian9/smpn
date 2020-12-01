import React from "react";
import { Container } from "react-bootstrap";

const ProfilComponent = () => {
  return (
    <div>
      <Container>
        <div className="col-md-3">
          <div>
            <div>
              <img
                src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
                class="img-responsive"
                alt=""
              />
            </div>
            <div>
              <div>Marcus Doe</div>
              <div>Developer</div>
            </div>
            <div class="profile-usermenu">
              <ul class="nav">
                <li class="active">
                  <a href="#">
                    <i class="glyphicon glyphicon-home"></i>
                    Overview{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="glyphicon glyphicon-user"></i>
                    Account Settings{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i class="glyphicon glyphicon-ok"></i>
                    Tasks{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="glyphicon glyphicon-flag"></i>
                    Help{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilComponent;
