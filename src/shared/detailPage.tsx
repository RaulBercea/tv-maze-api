import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShowById, ShowDetailType } from "../api";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
} from "@mui/material";

const DetailPage = () => {
  const { showId } = useParams();
  const [showDetail, setShowDetail] = useState<ShowDetailType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!showId) {
      try {
        const showIdNum = parseInt(showId);
        getShowById(showIdNum).then((show) => {
          setShowDetail(show);
        });
      } catch (err) {
        console.log("NaN");
      }
    }
  }, [showId]);

  return (
    <>
      <Card
        sx={{ maxWidth: 600, margin: "auto", display: "flex",marginTop: '7em'  }}
      >
        <CardMedia
          sx={{ maxWidth: 400 }}
          component="img"
          image={showDetail?.image}
        ></CardMedia>
        <CardContent>
          <Button
            sx={{ float: "right" }}
            onClick={() => navigate(-1)}
            variant="outlined"
          >
            &#60;
          </Button>
          <Typography gutterBottom variant="h4" color="initial">
            {showDetail?.title}
          </Typography>
          <Typography sx={{marginBottom: '40px'}} gutterBottom variant="body2" color="initial">
            {showDetail?.summary?.replace(/<[^>]*>/g, "")}
          </Typography>
          <Typography component="legend" color="text" sx={{fontWeight: 'bold'}}>
            Rating
          </Typography>
          <Rating
            readOnly
            precision={0.5}
            value={showDetail?.avgRating || 0}
            max={10}
          />
          <Grid item xs={8}>
            {showDetail?.genres?.map((genere, i) => (
              <Chip
                label={genere}
                style={{ marginRight: "10px" }}
                variant="outlined"
                key={i}
              />
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailPage;
