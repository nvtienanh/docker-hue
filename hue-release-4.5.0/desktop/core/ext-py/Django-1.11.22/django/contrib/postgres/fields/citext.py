from django.db.models import CharField, EmailField, TextField

__all__ = ['CICharField', 'CIEmailField', 'CIText', 'CITextField']


class CIText(object):

    def get_internal_type(self):
        return 'CI' + super(CIText, self).get_internal_type()

    def db_type(self, connection):
        return 'citext'


class CICharField(CIText, CharField):
    pass


class CIEmailField(CIText, EmailField):
    pass


class CITextField(CIText, TextField):
    pass
