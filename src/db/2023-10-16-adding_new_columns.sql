alter table admin.user add column name varchar(100) null;
alter table admin.user add column surname varchar(100) null;
alter table admin.user add column second_name varchar(100) null;
alter table admin.user add column mail varchar(100) null;
alter table admin.user add column created_at date;
alter table admin.user add column updated_at date;
alter table admin.user add column deleted_at date;