import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import TheCatApi from '../../axios/the-cat-api';

import { wrapper } from '../../store';
import { useCustomSelector } from '../../hooks/store';
import { fetchGalleryImages } from '../../store/gallery-slice/gallery-slice';
import { selectGallery } from '../../store/selectors';

import GlobalLayout from '../../components/layouts/global-layout/global-layout';
import Menu from '../../components/blocks/menu/menu';
import Breadcrumbs from '../../components/ui/breadcrumbs/breadcrumbs';
import Upload from '../../components/blocks/upload/upload';
import GalleryControlPanel from '../../components/layouts/gallery-control-panel/gallery-control-panel';
import PhotosPattern from '../../components/layouts/photos-pattern/photos-pattern';
import CustomImageItem from '../../components/ui/custom-image-item/custom-image-item';
import Loader from '../../components/ui/loader/loader';
import { Section } from '../../components/styled';
import { Container } from '../../pages-styles/gallery-page-styled.ts';
import { SelectOption } from '../../interfaces/select-option';
import { BreedResponse } from '../../interfaces/breed';
import Head from 'next/head';

interface GalleryPageProps {
  breedsList: SelectOption[];
}

const Index: NextPage<GalleryPageProps> = ({breedsList}) => {

  const pictures = useCustomSelector(selectGallery).pictures;
  const {isLoading} = useCustomSelector(selectGallery);

  return (
    <GlobalLayout>
      <Head>
        <title>Gallery</title>
      </Head>
      <Menu />
      <Section>
        <Container>
          <Breadcrumbs />
          <Upload />
        </Container>
        <GalleryControlPanel breedsList={breedsList} />
        {isLoading ?
          <Loader /> :
          <PhotosPattern>
            {pictures.map((image, index) => (
              <CustomImageItem {...image} key={image.id} index={index} type={'gallery'} />))}
          </PhotosPattern>}
      </Section>
    </GlobalLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<GalleryPageProps> = wrapper.getServerSideProps(store => async () => {
  const req = await TheCatApi.breeds.fetchAllBreeds();
  const fetchBreeds = req.data.map((breed: BreedResponse) => ({
    label: breed.name, value: breed.id,
  }));
  const breedsList = [store.getState().gallery.breed, ...fetchBreeds];

  await store.dispatch(fetchGalleryImages());
  return {
    props: {
      breedsList,
    },
  };
});
