import { defineRouteConfig } from "@medusajs/admin-sdk";
import { Container } from "@medusajs/ui";
import { useParams } from "react-router-dom";
const CustomPage = () => {
  const { id } = useParams();
 
  return <Container>This is my custom route for ID: {id} </Container>;
};

export const config = defineRouteConfig({
  
  
  
});

export default CustomPage;
