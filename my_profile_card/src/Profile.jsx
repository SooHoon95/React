function Profile(props) {
    return (
        <div className="profile-content">
            <h3>이름: {props.name}</h3>
            <p>역할: {props.role}</p>
            <p>Swift와 SwiftUI를 사랑하는 개발자입니다.</p>
            <p>React 정복중...</p>
        </div>
    );
}

export default Profile;