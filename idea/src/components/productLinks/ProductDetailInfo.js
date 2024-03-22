import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function ProductDetailInfo() {
    return (
      <div className="info">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Product Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Comments</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I’m a Comment.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

export default ProductDetailInfo;