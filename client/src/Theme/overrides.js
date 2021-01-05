export default {
 
  
    MuiListItemIcon: {
      root: {
        color: '#646464',
      },
    },
    MuiListItem: {
      button: {
        '&:focus,&:hover': {
          backgroundColor: 'rgba(234, 242, 249, 0.4)',
        },
      },
      root: {
        backgroundColor : "#FFF",
        '&:focus,&:hover': {
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: '#5753A4',
          },
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
}