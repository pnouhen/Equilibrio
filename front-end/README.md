/front-end
/public: There is the asset folder which contains the icons, images and logo

    /src
        /app
            /core : Reusable elements in multiple parts
                /components
                    /input-selected : Reproduces a select input
                    /location-times-location : Used for user (LocationTimesRoutingModule) and for admin (ManagePlacesTimesRoutingModule)
                    /location-times-location-map : Used by location-times-location
                    /logo : Manage interactions with the logo
                    /message-form : Display a message when the form is submitted
                    /training-card : Used for location-times-location, manage-places-times-form-category and manage-users-form-members-training

                /models : Models usable in multiple places within the website

                /pages
                    /error404 : Display if the URL is bad

                /services : Services usable in multiple components/services within the website


            /data-back-end : data and models linked to the database


            /landing : Pages accessible by all users
                /components : The header and the footer which are intended for the entire landing

                /layout : manage the display of the header, pages and footer

                /pages : groups all the landing pages (home, capoeira, location & time, prestations & animations, auth-page, reset-password and legales-mentions) width their components and services


            /users : Pages accessible by users with an account
                /components : The header and the footer which are intended for the entire users page

                /pages
                    /admin-management : Contains the admin's first page, which allows access to their section, the schedule, and users.

                    /admin-pages : Pages intended for admin
                        /components : Contains the component : return-admin-menu

                        /datas :
                            /CategoriesData : Allows management of multiple choices related to member categories
                            /LinkAdminMenuData : Allows to manage access to administrator pages

                        /models : Model of CategoriesData

                        /pages
                            /admin-menu : Display all access for the admin
                            /manage-places-times : Manages content for location-times-location
                            /manage-resources : Manages content for student-dashboard
                            /manage-users : Manages users. Use of a specific table for pre-displaying members.
                            /update-slides-shows-pictures : Update image of slidesShow home
                            /update-training-resumes : Update training resumes

                    /student-dashboard : Manage the dashboard of the member called "student"

                    /student-managment : Display all members associated with the user

                    /teacher-managment : Contains the teacher's first page, which allows the schedule, and users.

                    /training-attendance : Used for displaying and indicating which members are present at training sessions.

                /services : Services usable in multiple components/services within the users

                /users-layout : Manage the display of the header, pages and footer
