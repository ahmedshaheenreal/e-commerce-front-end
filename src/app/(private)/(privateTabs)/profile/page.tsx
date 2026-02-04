import UserDataForm from "@/components/Profile/UserDataForm";
async function page() {
  try {
    return <UserDataForm />;
  } catch (error) {
    console.log("This is the Error");
    console.log("ERROR", JSON.stringify(error));
  }
}

export default page;
