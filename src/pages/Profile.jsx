import React from 'react';
import ProfileModule from '@/modules/ProfileModule';
import useLanguage from '@/locale/useLanguage';
function Profile() {
  const entity = 'profile';
  const translate = useLanguage();

  const Labels = {
    PANEL_TITLE: translate('profile'),
    ENTITY_NAME: translate('profile'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const config = {
    entity,
    ...Labels,
  };

  return <ProfileModule config={config} />;
}

export default Profile;
