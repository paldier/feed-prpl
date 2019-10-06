#
# Copyright (C) 2019 IOPSYS
#

include $(TOPDIR)/rules.mk

PKG_NAME:=obuspa
PKG_VERSION:=1.0.0

PKG_SOURCE_PROTO:=git
PKG_SOURCE_VERSION:=b2729b2fc08410dfff0a4eea2ea8e0875f965a21
PKG_SOURCE_URL:=https://dev.iopsys.eu/fork/obuspa.git
PKG_SOURCE:=$(PKG_NAME)-$(PKG_SOURCE_VERSION).tar.gz

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

PKG_FIXUP:=autoreconf

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE


include $(INCLUDE_DIR)/package.mk

define Package/obuspa
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=USP agent
  DEPENDS:=+libcoap +libopenssl +libcurl +libsqlite3 +libcares +libubox +libubus +libblobmsg-json +uspd
endef

define Package/obuspa/description
 OB-USP-AGENT is a system daemon providing a User Services Platform (USP) Agent.
endef

TARGET_CFLAGS += \
	-I$(STAGING_DIR)/usr/include \
	-D_GNU_SOURCE

ifneq ($(CONFIG_USE_MUSL),)
TARGET_CFLAGS += -DUSE_MUSL
endif

#define Build/Prepare
#        $(CP) -rf ./obuspa/* $(PKG_BUILD_DIR)/
#endef

define Package/obuspa/install
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_DIR) $(1)/etc/obuspa
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/obuspa $(1)/usr/sbin/
	$(CP) ./files/* $(1)/
endef

$(eval $(call BuildPackage,obuspa))