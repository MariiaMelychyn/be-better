import loadable from '@loadable/component';

const FormInModal = loadable(() => import('components/Form/FormInModal'));

const ModalPriceWindow = loadable(() =>
  import('components/Price/ModalPriceWindow')
);

const ClientHistoryList = loadable(() =>
  import('components/ClientHistory/ClientHistoryList')
);

const ReviewsList = loadable(() => import('components/Reviews/ReviewsList'));

export const handleMenuClickPreload = () => {
  ClientHistoryList.preload();
  ReviewsList.preload();
};

export const preloadFormInModal = () => {
  FormInModal.preload();
};

export const preloadModalPriceWindow = () => {
  ModalPriceWindow.preload();
};
