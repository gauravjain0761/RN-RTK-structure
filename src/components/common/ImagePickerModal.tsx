import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '@/constants/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import {getFontSize} from '@/utils/responsiveFn/responsiveFn';
import CustomImage from './CustomImage';
import {IMAGES} from '@/assets/images';
import BottomModal from './BottomModal';
import CommonText from './CommonText';

type Props = {
  visible: boolean;
  onClose: () => void;
  selectedImage: (image: any) => void;
};

const ImagePickerModal = ({visible, onClose, selectedImage}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const onPressImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        multiple: false,
        mediaType: 'photo',
        cropping: true,
      });
      const newImg = {
        filename: image.filename || image.path?.split('.')?.pop(),
        mime: image.mime,
        url: image.sourceURL ?? image.path,
      };

      selectedImage(newImg);
      handleClose();
    } catch (error) {
      console.log('error', error);
    }
  };

  const onPressCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        multiple: false,
        mediaType: 'photo',
        cropping: true,
      });
      const newImg = {
        filename: image.filename || image.path?.split('.')?.pop(),
        mime: image.mime,
        url: image.sourceURL ?? image.path,
      };
      selectedImage(newImg);
      handleClose();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <BottomModal visible={isVisible} onClose={handleClose}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <CommonText text="Select Image" style={styles.title} />
          <CustomImage
            source={IMAGES.close}
            onPress={handleClose}
            size={getFontSize(3)}
            containerStyle={styles.closeButton}
          />
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={onPressImage} style={styles.imageView}>
            <CustomImage source={IMAGES.gallery} size={getFontSize(5)} />
            <CommonText text="Gallery" style={styles.title} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCamera} style={styles.imageView}>
            <CustomImage source={IMAGES.camera} size={getFontSize(5)} />
            <CommonText text="Camera" style={styles.title} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomModal>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  mainContainer: {
    paddingBottom: getFontSize(5),
  },
  title: {
    color: Colors.black,
    fontSize: getFontSize(3),
    fontWeight: '500',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  closeButton: {
    alignSelf: 'flex-end',
  },
  imageView: {
    alignItems: 'center',
    gap: getFontSize(1),
  },
  header: {
    marginBottom: getFontSize(3),
    padding: getFontSize(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageViewText: {
    color: Colors.black,
    fontSize: getFontSize(2),
    fontWeight: '500',
  },
});
