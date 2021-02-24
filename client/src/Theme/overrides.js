export default {
  
  MuiSvgIcon : {
    root : {
      cursor : "pointer"
    }
  },
  MuiButton : {
    contained : {
      /* background : "linear-gradient(142deg, rgba(100,161,255,1) 0%, rgba(136,252,254,1) 100%)", */
      /* background : "linear-gradient(142deg, rgba(0, 0, 119, 1) 0%, rgba(136,252,254,1) 100%)", */
      background: "linear-gradient(142deg, rgba(255,154,0,1) 0%, rgba(255,77,0,1) 100%)",
    },
    
  },  
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