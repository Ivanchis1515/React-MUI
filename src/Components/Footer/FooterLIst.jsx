
const FooterList = ({ ArrayNavLinks }) => {
    return (
        <Box
            sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#212121', // Puedes ajustar el color de fondo según tus preferencias
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            }}
        >
            {ArrayNavLinks.map(item => (
            <Button
                key={item.title}
                color="inherit"
                component={NavLink}
                to={item.path}
                style={{ margin: '0 10px' }}
            >
                {item.title}
            </Button>
            ))}
        </Box>
    );
};
export default FooterList;  