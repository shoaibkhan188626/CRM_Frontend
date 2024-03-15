import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/auth/selector';
import { AppContextProvider } from '@/context/appContext';
import PageLoader from '@/components/PageLoader';
import Localization from '@/locale/Localization';
import AuthRouter from '@/router/AuthRouter';

const ErpApp = lazy(() => import('./ErpApp'));

export default function IdurarOs() {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn)
    return (
      <Localization>
        <Suspense fallback={<PageLoader />}>
          <AuthRouter />
        </Suspense>
      </Localization>
    );
}
