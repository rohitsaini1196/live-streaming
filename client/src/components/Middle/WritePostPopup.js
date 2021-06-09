import React from "react";
import {
  Typography,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

function WritePostPopup({
  feedText,
  changeFeedText,
  isWriting,
  closeWriting,
  userName,
  publishFeedPost,
}) {
  return (
    <div>
      <div>
        <Dialog open={isWriting} fullWidth maxWidth="sm" onClose={closeWriting}>
          <div style={{ padding: "1.5rem 1.5rem 0.5rem 1.5rem" }}>
            <Typography>
              {" "}
              Hey <strong>{userName}</strong>, what's in your mind?
            </Typography>
          </div>
          <DialogContent>
            <TextField
              className="textarea"
              fullWidth
              variant="outlined"
              rowsMax={5}
              rows={3}
              multiline={true}
              value={feedText}
              onChange={changeFeedText}
            />
          </DialogContent>
          <DialogActions style={{ padding: "0.5rem 1.5rem" }}>
            <Button
              onClick={closeWriting}
              color="primary"
              variant="outlined"
              style={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              onClick={publishFeedPost}
              color="primary"
              variant="contained"
              style={{ textTransform: "none" }}
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default WritePostPopup;
