#
# Copyright (C) 2018 iopsys
#

include $(TOPDIR)/rules.mk

PKG_NAME:=owsd
PKG_VERSION:=1.1.4
PKG_RELEASE:=1

PKG_SOURCE_PROTO=git
PKG_SOURCE_URL:=https://github.com/paldier/owsd.git
PKG_SOURCE_VERSION:=6d2c10b28d2064f9341b5185a32a735cbb8d644d
PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION)-$(PKG_SOURCE_VERSION).tar.gz
PKG_SOURCE_SUBDIR:=${PKG_NAME}-${PKG_VERSION}
PKG_INSTALL:=1
PKG_BUILD_PARALLEL:=1
PKG_CONFIG_DEPENDS:=CONFIG_OWSD_USE_DBUS CONFIG_OWSD_USE_UBUS CONFIG_OWSD_USE_DBUS_UBUS CONFIG_OWSD_UPROXYD

PKG_LICENSE:=GPLv2
PKG_LICENSE_FILES:=LICENSE

USE_UBUS-y:=-DWSD_HAVE_UBUS=ON
USE_DBUS-y:=-DWSD_HAVE_DBUS=ON
USE_BOTH-y:=${USE_UBUS-y} ${USE_DBUS-y}
USE_UPROXYD-y:=-DOWSD_UPROXYD=ON

CMAKE_OPTIONS:=${USE_UBUS-${CONFIG_OWSD_USE_UBUS}} \
	${USE_DBUS-${CONFIG_OWSD_USE_DBUS}} \
	${USE_BOTH-${CONFIG_OWSD_USE_DBUS_UBUS}} \
	${USE_UPROXYD-${CONFIG_OWSD_UPROXYD}}

include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk

define Package/owsd
  SECTION:=iopsys
  CATEGORY:=IOPSYS
  DEPENDS:=+libjson-c +libblobmsg-json +libwebsockets +ubox \
	  +OWSD_USE_UBUS:ubus \
	  +OWSD_USE_DBUS:libdbus \
	  +OWSD_USE_DBUS:libxml2 \
	  +OWSD_USE_DBUS:dbus \
	  +OWSD_USE_DBUS_UBUS:ubus \
	  +OWSD_USE_DBUS_UBUS:libdbus \
	  +OWSD_USE_DBUS_UBUS:libxml2 \
	  +OWSD_USE_DBUS_UBUS:dbus
  TITLE:=owsd daemon
  MENU:=1
endef

define Package/owsd/config
       source "$(SOURCE)/Config.in"
endef

define Package/owsd/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/owsd $(1)/usr/bin/owsd
	$(INSTALL_DIR) $(1)/sbin
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/owsd.init $(1)/etc/init.d/owsd
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/owsd.config $(1)/etc/config/owsd
	$(INSTALL_DIR) $(1)/etc/hotplug.d/iface
	$(INSTALL_BIN) ./files/owsd.hotplug $(1)/etc/hotplug.d/iface/55-owsd
ifeq ($(CONFIG_OWSD_UPROXYD),y)
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/uproxyd $(1)/sbin/uproxyd
endif
endef

define Package/owsd/description
 Web socket ubus daemon
endef

$(eval $(call BuildPackage,owsd))
