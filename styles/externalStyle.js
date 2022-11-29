import { StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
const windowWitdh = Dimensions.get("window").width / 2;
export const externalStyle = {
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#5bd8d0",
    paddingHorizontal: 10,
  },
 
  LoginImage: {
   left: 50,
    borderRadius: 50,
    borderWidth: 5,
  },
  ForgotImage: {
    
    left: 5,
     width: 350,
     height: 350,
   },
  containerWrapper: {
    padding: 20,
    backgroundColor: colors.white,
  },
  homeCard: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    height: 190,
  },
  homeTitle: {
    paddingTop: 4,
    marginLeft: 5,
    fontSize: 15,
    fontFamily: "semibold",
    color: colors.black,
  },
  semibold17: {
    fontFamily: "semibold",
    fontSize: 17,
  },
  semibold22: {
    fontFamily: "semibold",
    fontSize: 23,
  },
  homeCard: {
    borderRadius: 10,
    position: "relative",
    margin: 7,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: windowWitdh - 20,
    height: 100,
  },
  homeCardLayout: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 6,
    flexWrap: "wrap",
    // backgroundColor: "red",
    flex: 1,
  },
  headerButton: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.gray,
    backgroundColor: colors.greens,
  },
  headerButtonText: {
    fontFamily: "regular",
    paddingVertical: 5,
    color: "black",
    marginTop: 2,
    fontSize: 13,
    paddingHorizontal: 15,
  },
  greetingWrapper: {
    width: "100%",
    // backgroundColor: "red",
  },
  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 30,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 100,
    borderRadius: 100,
  },
  // home style is done here
  aboutUsImage: {
    height: 300,
    width: "100%",
    borderRadius: 20,
  },
  aboutUsText: {
    fontSize: 17,
    paddingVertical: 20,
    lineHeight: 30,
    textAlign: "center",
  },
  // about us is done here
  announcementImage: {
    height: 200,
    width: "100%",
    borderRadius: 20,
  },
  Iconlogo: {
    alignItems: "center",
    justifyContent: "center",
    right: 8,
    bottom: 0,
    width: 50,
    height: 50,
    
  },
  announcementTitle: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    fontFamily: "semibold",
  },
  announcementCard: {
    marginBottom: 25,
  },
  announcementDescription: {
    fontSize: 13,
    textAlign: "center",
    margin: 10,
    marginTop: 0,
    fontFamily: "regular",
  },
  updateProfileButton: {
    padding: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    backgroundColor: colors.greens,
  },
  updateProfileWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  updateProfileText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  // announcement end here
  loading: {
    textAlign: "center",
    fontSize: 24,

    // height: "100%",
  },
  loadingWrapper: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  //  loading ends here
  allfield: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 17,
    
  },
  containereye:{
    right: -150,
   bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  select: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 19,
    paddingHorizontal: 20,
    fontSize: 17,
  },
  description: {
    // fontSize: 17,
    lineHeight: 30,
    height: 300,
    textAlignVertical: "top",
  },
  modal: {
    zIndex: 10,
    flex: 1,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  modalWrapper: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },
  selectItem: {
    padding: 20,
    textAlign: "center",
    fontSize: 17,
  },
  semibold17label: {
    fontSize: 17,
    marginVertical: 10,
    fontFamily: "semibold",
  },
  submitButton: {
    marginVertical: 10,
    padding: 20,
    width: "100%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#5bd8d0",
  },
  submitText: {
    fontFamily: "semibold",
    color: colors.black,
    textAlign: "center",
    fontSize: 17,
  },
  // end of forms
  dashboardCard: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: colors.black,
    marginBottom: 20,
    alignItems: "center",
    height: 100,
    width: Dimensions.get("window").width - 20,
  },
  dashboardText: {
    fontSize: 23,
    fontFamily: "semibold",
    color: colors.black,
  },
  // end of dashboard
  toggleCircleOn: {
    zIndex: 5,
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  toggleCircleOff: {
    zIndex: 5,
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: colors.red,
    borderColor: colors.black,
  },
  toggleBarActive: {
    position: "absolute",
    backgroundColor: colors.greens,
    height: 20,
    left: 0,
    top: 0,
    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 20,
    width: 40,
  },
  toggleLeftWrapper: {
    width: 40,
    alignItems: "flex-start",
  },
  toggleRightWrapper: {
    width: 40,
    alignItems: "flex-end",
  
  },
  toggleBarNotActive: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 0,
    backgroundColor: colors.white,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.black,
    colors: colors.white,
    width: 40,
  },
  settingsCard: {
    height: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  settingsCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // end of setting
  sosButtonWrapper: {
    position: "relative",
    width: "100%",

    zIndex: 10,
    alignItems: "flex-end",
    right: 0,
    height: 50,
    bottom: 5,
  },
  sosButton: {
    alignItems: "center",
    justifyContent: "center",
    right: 8,
    bottom: 0,
    width: 50,
    height: 50,
    borderRadius: 200,
    backgroundColor: colors.red,
  },
  sosButtons: {
    alignItems: "center",
    justifyContent: "center",
    right: 8,
    
    width: 50,
    height: 50,
    top: -50,
    borderRadius: 200,
    backgroundColor: colors.red,
  },
  sosButtonWrappers: {
    position: "relative",
    width: "100%",
top: 30,
    zIndex: 10,
    alignItems: "flex-end",
    right: -20,
    height: 50,
    bottom: -60,
  },

  inputField: {
    padding: 8,
    fontFamily: "regular",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.lightgray,
  },
  searchIcons: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 5,
    alignItems: "center",
    justifyContent: "center",
    top: 2,
    color: colors.greens
  },
  semibold23: {
    fontFamily: "semibold",
    fontSize: 17,
  },
  regular13: {
    fontFamily: "regular",
    // color: colors.black,
  },
};
