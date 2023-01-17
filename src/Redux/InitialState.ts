import {v1} from "uuid";

export const InitialState = {
    ProfilePage: {
        PostsData: [
            {id: v1(), message: "Hello", likesCount: 10},
            {id: v1(), message: "How are you?", likesCount: 5},
            {id: v1(), message: "Just message.", likesCount: 14}
        ],
        userProfile: {
            aboutMe: "",
            contacts:{
                facebook: "",
                website: "",
                vk: "",
                twitter: "",
                instagram: "",
                youtube: "",
                github: "",
                mainLink: ""
            },
            lookingForAJob: false,
            lookingForAJobDescription: "",
            fullName: "",
            userId: null,
            photos:{
                small: "",
                large: ""
            }
        }
    },
    MessagesPage: {
        DialogsData: [
            {id: 1, name: "Andrey", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"},
            {id: 2, name: "Vlad", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"},
            {id: 3, name: "Kolyan", avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}
        ],
        MessageData: [
            {
                id: 1,
                userId: 1,
                userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg",
                message: "hello"
            },
            {
                id: 2,
                userId: 1,
                userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg",
                message: "How are you?"
            },
            {
                id: 3,
                userId: 2,
                userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg",
                message: "Just message."
            }
        ]
    },
    NavBarPage: {
        NavBarData: [
            {id: "1", friend: "Andrey", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"},
            {id: "2", friend: "Vlad", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"},
            {id: "3", friend: "Kolya", avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"}
        ]
    },
    FriendsPage: {
        FriendsData: [
            {
                id: "1",
                friend: "Andrey",
                surname: "Malin",
                avatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg"
            },
            {
                id: "2",
                friend: "Vlad",
                surname: "Rudenko",
                avatar: "https://android-obzor.com/wp-content/uploads/2022/02/28-2.jpg"
            },
            {
                id: "3",
                friend: "Kolya",
                surname: "Cleivin",
                avatar: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"
            },

        ],
        FriendsRequest: [
            {
                id: v1(),
                name: "Ivan",
                surname: "Potekhin",
                mutualFriends: 5,
                avatar: "https://sun9-82.userapi.com/impg/c857220/v857220647/111412/q8ov05nBxt4.jpg?size=1242x828&quality=96&sign=89645dda1e5c6dcad6a702eb81f378ce&type=album"
            },
            {
                id: v1(),
                name: "Semyon",
                surname: "Ubersky",
                mutualFriends: 7,
                avatar: "https://sun9-31.userapi.com/impf/c626421/v626421785/43089/X_RH8aUhAEE.jpg?size=960x720&quality=96&sign=88dd041d44fde45223d6287305057f08&type=album"
            },
            {
                id: v1(),
                name: "Daniil",
                surname: "Potekhin",
                mutualFriends: 6,
                avatar: "https://sun9-61.userapi.com/impf/c858324/v858324427/74ad2/g-a9YdAaqgI.jpg?size=1535x2048&quality=96&sign=3b38bffb492db587fda1793fbcae825c&type=album"
            },
        ],
    },
}