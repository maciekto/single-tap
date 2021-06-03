import React, { Component } from 'react'
import ReactCrop from "react-image-crop";

// assets
import defaultImage from '../../assets/defaultImage.png'
import userEditAddPhotoImage from '../../assets/userEditAddPhotoImage.png'

// Modules
import ProfilePopup from '../3_modules/PopupProfile'
class ProfilePage extends Component {
    state = {
        src: null,
        crop: {
          unit: "%",
          width: 30,
          aspect: 1 / 1
        }
    }
    // IMAGE CROP

    onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener("load", () =>
            this.setState({ src: reader.result })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };
    // If you setState the crop in here you should return false.
    onImageLoaded = (image) => {
        this.imageRef = image;
    };

    onCropComplete = (crop) => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
        const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop,
            "newFile.jpeg"
        );
        this.setState({ croppedImageUrl });
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
        );

        return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error("Canvas is empty");
            return;
            }
            blob.name = fileName;
            window.URL.revokeObjectURL(this.fileUrl);
            this.fileUrl = window.URL.createObjectURL(blob);
            resolve(this.fileUrl);
        }, "image/jpeg");
        });
    }



    componentDidMount = () => {
        console.log(this.props.user)
    }

    openPopup = () => {
        console.log('EDIT THAT SHIEET')
    }

    render() {
        const { crop, croppedImageUrl, src } = this.state;
        
        return (

            <div className='ProfilePage'>
                <div className='ProfilePage-UserImage'>
                    <img className='ProfilePage-UserImage-Photo' src={this.props.user.photoURL !== null ? this.props.user.photoURL : defaultImage} />
                    <div className='ProfilePage-UserImage-AddIcon'>
                        <img className='ProfilePage-UserImage-AddIcon-Image' src={userEditAddPhotoImage} />
                        <input type="file" accept="image/*" onChange={this.onSelectFile}></input>
                    </div>
                </div>
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                    />
                    )}
                <div className='ProfilePage-TitleName ProfilePage-Title'>
                    Name:
                </div>
                <div className='ProfilePage-DataName ProfilePage-Data'>
                    {this.props.user.displayName}
                </div>
                <div className='ProfilePage-EditName ProfilePage-Edit' onClick={this.openPopup}>
                    Edit
                </div>
                <div className='ProfilePage-TitleEmail ProfilePage-Title'>
                    E-mail:
                </div>
                <div className='ProfilePage-DataEmail ProfilePage-Data'>
                    {this.props.user.email}
                </div>
                <div className='ProfilePage-EditEmail ProfilePage-Edit'>
                    Edit
                </div>
                <div className='ProfilePage-TitlePassword ProfilePage-Title'>
                    Password:
                </div>
                <div className='ProfilePage-DataPassword ProfilePage-Data'>
                    ********
                </div>
                <div className='ProfilePage-EditPassword ProfilePage-Edit'>
                    Edit
                </div>
            </div>
        )
    }
}
export default ProfilePage;
