import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id:1,
            name: 'Nghe đi rồi buồn',
            imgThumbnail:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/a/8/d/3a8d94382aed271da10250f091b3fb25.jpg'
        },
        {
            id:2,
            name: 'Nghe đi rồi buồn 2',
            imgThumbnail:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/b/9/c/0b9c644041b689f0df25ccb3fd1ee5a2.jpg'
        },
        {
            id:3,
            name: 'Nghe đi rồi buồn 3',
            imgThumbnail:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/a/0/9/9a096c95df0d62c35a2b23a7ae317a7e.jpg'
        }
    ]
    return (
        <div>
            <h2>Có Thể Bạn Sẽ Thích</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;