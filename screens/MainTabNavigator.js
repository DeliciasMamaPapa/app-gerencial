import React from "react";
import { Icon } from "react-native-elements";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Colors from "../shared/constants/Colors";
import ProductsScreen from "../screens/Products/Products/ProductsScreen";
import OrdersScreen from "../screens/Orders/Orders/OrdersScreen";
import CentralScreen from "../screens/Central/CentralScreen";
import ClientsScreen from "../screens/Clients/Clients/ClientsScreen";


export default TabNavigator({
    Products: {
        screen: ProductsScreen
    },
    Orders: {
        screen: OrdersScreen
    },
    Central: {
        screen: CentralScreen
    },
    Clients: {
        screen: ClientsScreen
    }
},
{
  navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => {
          const {routeName} = navigation.state;
          switch (routeName) {
              case "Products": return "Produto";
              case "Orders": return "Encomenda";
              case "Central": return "Central";
              case "Clients": return "Cliente";
          }
          return null;
      },
      tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;

          switch (routeName) {
              case "Products":
                  iconName = "grid";
                  break;
              case "Orders":
                  iconName = "basket-loaded";
                  break;
              case "Central":
                  iconName = "bubbles";
                  break;
              case "Clients":
                  iconName = "people";
                  break;
          }
          return (
              <Icon
                  name={iconName}
                  type="simple-line-icon"
                  size={20}
                  color={focused ? Colors.primaryBlue : Colors.black}
              />
          );
      },
  }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: Colors.primaryBlue,
        style: { paddingVertical: 5 },
    },
});
