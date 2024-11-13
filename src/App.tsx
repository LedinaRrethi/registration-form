import { Box, Button, Container, Paper, Typography } from '@mui/material';

const serviceList = ['Service 1', 'Service 2', 'Service 3'];
function App() {
  return (
    <Container>
      <Typography variant="h1" sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}>
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        {serviceList.map((service) => {
          return (
            <Paper elevation={3}>
              <Box sx={{ m: 3 }}>
                <Typography variant="h3">{service}</Typography>
                <Typography sx={{ mt: 1 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos quo exercitationem provident magni
                  nihil perspiciatis quia sint. Iusto ex ipsum natus officia fugit!
                </Typography>
                <Button variant="contained">Learn More</Button>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Container>
  );
}

export default App;
