import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import  UserService   from '../../service/user-service';
import PurchaseList from '../StoreList/PurchaseList'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import { UserContext } from '../../context/user-context'
import axios from 'axios';


const PurchaseHistory= () =>{

    const [purchaseList, setPurchaseList] = useState()
    const [loading, setLoading] = useState(false)
    const [user,setUser] = useContext(UserContext)
    const {t} = useTranslation()

    useEffect(() => {    
        const fetchData = async () => {
            const resStores = await UserService.getUserOrders(user.id)
         // const resStores = await axios.get("https://buyingfromhome.herokuapp.com/users/get/1/orders")
          setPurchaseList(resStores.data)
        }
        fetchData();
    },[user]);

  const RenderPurchases=  ()=> {
    return (
      <PurchaseList purchase = {purchaseList} ></PurchaseList>
    )
  }

  console.log(purchaseList)

  return (
    <Box>
      <Box>
        <Typography variant="h4">{t("Profile.Purchases")} </Typography>
        <Box className="purchase" >
          {purchaseList ? <RenderPurchases> </RenderPurchases> : <p>{t("Profile.SearchingPurchases")}</p>}
        </Box>
      </Box>

    </Box>
  );
}
export default withRouter(PurchaseHistory);