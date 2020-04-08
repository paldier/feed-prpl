include $(TOPDIR)/rules.mk

PKG_NAME:=udrone
PKG_VERSION:=2f24f3809ae07fbf2e8dfc3e473c15b5cc753287
PKG_SOURC_DATE:=2020-04-06
PKG_RELEASE:=1

PKG_SOURCE_URL:=https://codeload.github.com/blogic/udrone/tar.gz/$(PKG_VERSION)?
PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_HASH:=39a97c90d6a9d61cf8d0ade9286c2b5534e20b9cba6e7c8071889807e2fbd5ca

PKG_MAINTAINER:=John Crispin <john@phrozen.org>, Paul Spooren <mail@aparcar.org>
PKG_LICENSE:=GPL-2.0-or-later

include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk

define Package/udrone
  SECTION:=devel
  CATEGORY:=Development
  TITLE:=OpenWrt QA Daemon
  DEPENDS:=+libjson-c +libubox +libblobmsg-json +libubus +libuci +rpcd-mod-luci
endef

TARGET_CFLAGS += -I$(STAGING_DIR)/usr/include

define Package/udrone/install
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/sbin/udrone $(1)/usr/sbin/

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/init $(1)/etc/init.d/udrone
endef

$(eval $(call BuildPackage,udrone))
