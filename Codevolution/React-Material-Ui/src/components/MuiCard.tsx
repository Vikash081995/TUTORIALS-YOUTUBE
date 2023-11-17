import {
  Box,
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
  CardMedia
} from "@mui/material";

function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            et.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share </Button>
          <Button size="small">Learn More </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
