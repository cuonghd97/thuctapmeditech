| Lệnh                        | Mô tả                                                                                         |
|-----------------------------|-----------------------------------------------------------------------------------------------|
| chmod ugo=rwx myfile        | Cấp toàn quyền truy cập cho file                                                              |
| chmod u=rwx,g=rw,o=r myfile | Cấp các quyền truy cập khác nhau cho file (user=rwx, group=rw, others=r)                      |
| chmod 764 myfile            | Cấp các quyền truy cập khác nhau cho file (7 có nghĩa là rwx (4+2+1),  6 là rw (4+2), 1 là o) |
| chmod 777 myfile            | Cấp toàn quyền truy cập cho file                                                              |
| chmod 770 myfile            | Hủy bỏ quyền truy cập cho others (0 có nghĩa là không cấp quyền truy cập)                     |