import { Box } from '@mui/material/';

export const Message = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Box
          sx={{
            position: 'relative',
            py: '25px',
            px: '43px',
            bgcolor: 'background.msgUser',
            borderRadius: '40px',
            mb: '20px',
            maxWidth: '704px',

            '&::before': {
              content: '""',
              borderRadius: '100%',
              position: 'absolute',
              width: '60px',
              height: '60px',
              zIndex: -1,
              backgroundColor: 'background.msgUser',
              bottom: '0',
              left: '-30px',
            },
            '&::after': {
              content: '""',
              borderRadius: '100%',
              position: 'absolute',
              width: '60px',
              height: '60px',
              zIndex: -1,
              backgroundColor: 'background.paper',
              bottom: '7px',
              left: '-50px',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          neque, provident error sit fuga quidem perspiciatis. Nisi adipisci
          maiores alias illum, nam fugit, perspiciatis tenetur, recusandae
          dolorem porro quibusdam necessitatibus!
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box
          sx={{
            position: 'relative',
            py: '25px',
            px: '43px',
            bgcolor: 'background.msgAssist',
            borderRadius: '40px',
            mb: '20px',
            maxWidth: '704px',

            '&::before': {
              content: '""',
              borderRadius: '100%',
              position: 'absolute',
              width: '60px',
              height: '60px',
              zIndex: -1,
              backgroundColor: 'background.msgAssist',
              bottom: '0',
              right: '-30px',
            },
            '&::after': {
              content: '""',
              borderRadius: '100%',
              position: 'absolute',
              width: '60px',
              height: '60px',
              zIndex: -1,
              backgroundColor: 'background.paper',
              bottom: '7px',
              right: '-50px',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          neque, provident error sit fuga quidem perspiciatis. Nisi adipisci
          maiores alias illum, nam fugit, perspiciatis tenetur, recusandae
          dolorem porro quibusdam necessitatibus!
        </Box>
      </Box>
    </>
  );
};
