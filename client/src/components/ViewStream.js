import { Paper } from "@material-ui/core";
import React from "react";

function ViewStream() {
  return (
    <div>
      <div>
        <div>
          <video
            width="100%"
            height="auto"
            controls
            style={{ borderRadius: 5 }}
          >
            <source
              src="http://techslides.com/demos/sample-videos/small.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div>
        <Paper>
          <p>User Details</p>
        </Paper>
      </div>
    </div>
  );
}

export default ViewStream;
