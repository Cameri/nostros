import React, { useContext } from 'react';
import { BottomNavigation, BottomNavigationTab, useTheme } from '@ui-kitten/components';
import { AppContext } from '../../Contexts/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const NavigationBar: React.FC = () => {
  const { goToPage, page } = useContext(AppContext);
  const theme = useTheme();

  const pageIndex: string[] = ['home', 'contacts', 'profile'];

  const getIndex: () => number = () => {
    if (page.includes('profile')) {
      return !page.includes('profile#') ? 2 : 1;
    } else if (page.includes('note#')) {
      return 0;
    } else {
      return pageIndex.indexOf(page);
    }
  };

  return page ? (
    <BottomNavigation
      selectedIndex={getIndex()}
      onSelect={(index: number) => goToPage(pageIndex[index], true)}
    >
      <BottomNavigationTab
        icon={<Icon name='home' size={24} color={theme['text-basic-color']} />}
      />
      <BottomNavigationTab
        icon={<Icon name='address-book' size={24} color={theme['text-basic-color']} />}
      />
      <BottomNavigationTab
        icon={<Icon name='user' size={24} color={theme['text-basic-color']} />}
      />
    </BottomNavigation>
  ) : (
    <></>
  );
};

export default NavigationBar;
