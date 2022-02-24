import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    font:{
        fontSize:20,
        color:'#111111',
        flexGrow:1,
        justifyContent:"center",
        alignItems:"center",    
        padding:10,
        fontWeight: "bold"
        
    },

    container:{
        alignItems:"center"
      
    },

    input:{
        margin:15,
        height:40,
        width:500,
        paddingBottom: 7,
        borderColor:'#7a42f4',
        borderWidth:3,
        borderRadius: 100,
        textAlign: 'center',
        flex: 1,
        flexDirection: "row",
        
        

        
    },
 
    submitButton:{
        backgroundColor:'#4a12c4',
        padding:10,
        margin:15,
        height:50,
        width: 500,
        borderRadius: 100,
        borderWidth:1,
        },

    submitButtonText:{
            color:'white',
            alignItems:'center',
            textAlign:'center',
            fontSize: 20    ,
            fontWeight: "bold"
        },


switchstilo:{
        flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  
})