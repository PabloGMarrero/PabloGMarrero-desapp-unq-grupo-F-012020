import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import  UserService   from '../../service/user-service';
import PurchaseList from '../StoreList/PurchaseList'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import { UserContext } from '../../context/user-context'



const PurchaseHistory= () =>{

    const [purchaseList, setPurchaseList] = useState()

    const {user} = useContext(UserContext)
    const {t} = useTranslation()
    const {dataFacebook} = useContext(UserContext);
    const isUserFacebook = dataFacebook.graphDomain === 'facebook'

    useEffect(() => {    
        const fetchData = async () => {
            const resStores = await UserService.getUserOrders(user.id)
          setPurchaseList(resStores.data)
        }
        fetchData();
    },[user]);

  const RenderPurchases=  ()=> {
    return (
      <PurchaseList purchase = {purchaseList} ></PurchaseList>
    )
  }

  return (
    <Box>
      {isUserFacebook ? <h2>{t("Profile.ErrorFacebook")}</h2>  
          : 
      <Box>
        <Typography variant="h4">{t("Profile.Purchases")} </Typography>
        <Box className="purchase" >
          {purchaseList ? <RenderPurchases> </RenderPurchases> : <p>{t("Profile.SearchingPurchases")}</p>}
        </Box>
      </Box>
        }
    </Box>
  );
}
export default withRouter(PurchaseHistory);